const express = require("express");
const pool = require("../db");

const router = express.Router();

/*
==========================================
REGISTER
POST /api/auth/register
==========================================
*/

router.post("/register", async (req, res) => {

    const {
        fullName,
        email,
        password,
        role,
        captchaId,
        captchaAnswer
    } = req.body;
    if (
    password.length < 6 ||
    password.length > 20
) {

    return res.json({

        success: false,

        message:
            "Password must be between 6 and 20 characters."

    });

}

    try {

        // Verify Captcha
        const captchaResult = await pool.query(
            "SELECT * FROM captchas WHERE id = $1",
            [captchaId]
        );

        if (captchaResult.rows.length === 0) {

            return res.json({
                success: false,
                message: "Captcha not found"
            });

        }

        const captcha = captchaResult.rows[0];

        if (new Date() > captcha.expires_at) {

            await pool.query(
                "DELETE FROM captchas WHERE id=$1",
                [captchaId]
            );

            return res.json({
                success: false,
                message: "Captcha Expired"
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

        // Delete captcha after verification
        await pool.query(
            "DELETE FROM captchas WHERE id=$1",
            [captchaId]
        );

        // Check existing email
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (existingUser.rows.length > 0) {

            return res.json({
                success: false,
                message: "Email already exists"
            });

        }

        // Insert user
        await pool.query(
            `INSERT INTO users
            (full_name,email,password,role)
            VALUES($1,$2,$3,$4)`,
            [
                fullName,
                email,
                password,
                role
            ]
        );

        res.json({
            success: true,
            message: "Registration Successful"
        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});


/*
==========================================
LOGIN
POST /api/auth/login
==========================================
*/

// router.post("/login", async (req, res) => {

//     const {
//         email,
//         password,
//         captchaId,
//         captchaAnswer
//     } = req.body;

//     try {

//         // 1. Get captcha
//         const captchaResult = await pool.query(
//             "SELECT * FROM captchas WHERE id=$1",
//             [captchaId]
//         );

//         if (captchaResult.rows.length === 0) {
//             return res.json({
//                 success: false,
//                 message: "Captcha not found"
//             });
//         }

//         const captcha = captchaResult.rows[0];

//         // 2. Expiry check
//         if (new Date() > captcha.expires_at) {

//             await pool.query(
//                 "DELETE FROM captchas WHERE id=$1",
//                 [captchaId]
//             );

//             return res.json({
//                 success: false,
//                 message: "Captcha expired"
//             });
//         }

//         // 3. SAFE captcha compare (FIXED CRASH)
//         if (
//             !captchaAnswer ||
//             captcha.captcha_text.toLowerCase() !== captchaAnswer.toLowerCase()
//         ) {
//             return res.json({
//                 success: false,
//                 message: "Invalid captcha"
//             });
//         }

//         // delete captcha after use
//         await pool.query(
//             "DELETE FROM captchas WHERE id=$1",
//             [captchaId]
//         );

//         // 4. Get user
//         const userResult = await pool.query(
//             "SELECT * FROM users WHERE email=$1",
//             [email]
//         );

//         if (userResult.rows.length === 0) {
//             return res.json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         const user = userResult.rows[0];

//         // 5. SAFE password check
//         if (user.password !== password) {
//             return res.json({
//                 success: false,
//                 message: "Incorrect password"
//             });
//         }

//         // 6. Success response
//         return res.json({
//             success: true,
//             message: "Login successful",
//             user: {
//                 id: user.id,
//                 name: user.full_name,
//                 email: user.email,
//                 role: user.role
//             }
//         });

//     } catch (err) {
//         console.log(err);

//         return res.status(500).json({
//             success: false,
//             message: "Server error"
//         });
//     }
// });

// module.exports = router;


router.post("/login", async (req, res) => {

    const {
        email,
        password,
        captchaId,
        captchaAnswer
    } = req.body;

    try {

        // =========================
        // 1. CAPTCHA CHECK
        // =========================
        const captchaResult = await pool.query(
            "SELECT * FROM captchas WHERE id=$1",
            [captchaId]
        );

        if (captchaResult.rows.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Captcha not found"
            });
        }

        const captcha = captchaResult.rows[0];

        // expiry check
        if (new Date() > captcha.expires_at) {

            await pool.query(
                "DELETE FROM captchas WHERE id=$1",
                [captchaId]
            );

            return res.status(400).json({
                success: false,
                message: "Captcha expired"
            });
        }

        // captcha validation (SAFE)
        if (
            !captchaAnswer ||
            captcha.captcha_text.toLowerCase() !== captchaAnswer.toLowerCase()
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid captcha"
            });
        }

        // delete used captcha
        await pool.query(
            "DELETE FROM captchas WHERE id=$1",
            [captchaId]
        );

        // =========================
        // 2. USER CHECK
        // =========================
        const userResult = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (userResult.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const user = userResult.rows[0];

        // =========================
        // 3. PASSWORD CHECK
        // =========================
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

        // =========================
        // 4. SUCCESS RESPONSE
        // =========================
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        console.log("LOGIN ERROR:", err);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

module.exports = router;