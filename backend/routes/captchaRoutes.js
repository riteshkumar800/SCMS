const express = require("express");
const svgCaptcha = require("svg-captcha");
const { v4: uuidv4 } = require("uuid");
const pool = require("../db");

const router = express.Router();

// Generate CAPTCHA
router.get("/", async (req, res) => {
  try {

    const captcha = svgCaptcha.create({
      size: 5,
      noise: 3,
      color: true,
      background: "#f4f4f4"
    });

    const captchaId = uuidv4();

    const expiresAt = new Date(
      Date.now() + 5 * 60 * 1000
    );

    await pool.query(
      `INSERT INTO captchas
      (id, captcha_text, expires_at)
      VALUES ($1,$2,$3)`,
      [
        captchaId,
        captcha.text,
        expiresAt
      ]
    );

    res.json({
      captchaId,
      image: captcha.data
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Captcha generation failed"
    });

  }
});

// Verify CAPTCHA
router.post("/verify", async (req, res) => {

  const {
    captchaId,
    captchaAnswer
  } = req.body;

  try {

    const result =
      await pool.query(
        `SELECT *
         FROM captchas
         WHERE id=$1`,
        [captchaId]
      );

    if (result.rows.length === 0) {

      return res.json({
        success: false,
        message: "Captcha not found"
      });

    }

    const captcha =
      result.rows[0];

    if (
      new Date() >
      captcha.expires_at
    ) {

      await pool.query(
        "DELETE FROM captchas WHERE id=$1",
        [captchaId]
      );

      return res.json({
        success: false,
        message: "Captcha expired"
      });

    }

    if (
      captcha.captcha_text.toLowerCase() !==
      captchaAnswer.toLowerCase()
    ) {

      return res.json({
        success: false,
        message: "Invalid Captcha"
      });

    }

    await pool.query(
      "DELETE FROM captchas WHERE id=$1",
      [captchaId]
    );

    res.json({
      success: true
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;