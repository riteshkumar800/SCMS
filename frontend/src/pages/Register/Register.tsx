import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("Employee");

  const [captchaImage, setCaptchaImage] = useState("");

    const [captchaId, setCaptchaId] = useState("");

    const [captchaInput, setCaptchaInput] = useState("");

const loadCaptcha = async () => {

  try {

    const response = await fetch(
      "http://localhost:5001/api/captcha"
    );

    const data = await response.json();

    setCaptchaImage(data.image);

    setCaptchaId(data.captchaId);

  } catch (err) {

    console.log(err);

  }

};
useEffect(() => {

  loadCaptcha();

}, []);

const handleRegister = async () => {

    if (
    fullName.trim().length < 3
  ) {

    alert("Full Name must be at least 3 characters.");

    return;

  }

  if (
    password.length < 6
  ) {

    alert("Password must be at least 6 characters.");

    return;

  }

  if (
    password.length > 20
  ) {

    alert("Password cannot exceed 20 characters.");

    return;

  }


  if (password !== confirmPassword) {

    alert("Passwords do not match");

    return;

  }

  try {

    const response = await fetch(
      "http://localhost:5001/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          fullName,

          email,

          password,

          role,

          captchaId,

          captchaAnswer: captchaInput

        })

      }
    );

    const result = await response.json();

    if (result.success) {

      alert(result.message);

    //   navigate("/");
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(result.user));

    navigate("/dashboard");

    }

    else {

      alert(result.message);

      setCaptchaInput("");

      loadCaptcha();

    }

  }

  catch (err) {

    console.log(err);

    alert("Server Error");

  }

};

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="p-10 flex flex-col justify-center">

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>

            <p className="text-gray-400">
              Register a new SCMS user
            </p>

          </div>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            maxLength={20}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            maxLength={20}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mb-6 p-4 rounded-lg bg-black border border-gray-700 text-white"
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>

          <div className="mb-5">

  <div className="flex gap-3">

    <div
      className="
      flex-1
      bg-black
      border
      border-gray-700
      rounded-lg
      p-3
      text-center
      select-none
      "
    >

      <div
        className="flex justify-center"
        dangerouslySetInnerHTML={{
          __html: captchaImage
        }}
      />

    </div>

    <button
      type="button"
      onClick={loadCaptcha}
      className="
      bg-gray-800
      px-4
      rounded-lg
      border
      border-gray-700
      hover:bg-gray-700
      "
    >
      🔄
    </button>

  </div>

  <input
    type="text"
    placeholder="Enter Captcha"
    value={captchaInput}
    onChange={(e) =>
      setCaptchaInput(e.target.value)
    }
    className="
    w-full
    mt-3
    p-4
    rounded-lg
    bg-black
    border
    border-gray-700
    text-white
    "
  />

</div>

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-semibold text-white"
            >
            Create Account
            </button>

          <p className="text-center text-gray-400 mt-6">

            Already have an account?{" "}

            <Link
              to="/"
              className="text-cyan-400 hover:underline"
            >
              Sign In
            </Link>

          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

          <div className="text-8xl mb-6">
            ⚙️
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            SCMS
          </h2>

          <p className="text-center text-gray-400 leading-relaxed">
            Create your account to access the Supply Chain Management System.
            Manage suppliers, materials, stores, manufacturers and employees
            securely.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;