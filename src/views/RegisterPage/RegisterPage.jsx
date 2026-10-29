import { useState } from 'react';
import './RegisterPage.css'

import { showLoading, updateToast } from '../../utils/toastUtils.jsx';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  
  // Email validation regex pattern
  const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (emailVar) => {
    if (!emailVar) {
      setEmailError("");
      return false;
    }
    if (emailRegex.test(emailVar)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email address");
      return false;
    }
  };

  const handleEmailChange = (e) => {
    const emailVar = e.target.value;
    setEmail(emailVar);
    validateEmail(emailVar);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const toastId = showLoading("Creating account...");

    // if (passwordStrengthScore < 2) {
    //   setPasswordStrengthError("The password needs to be more secure.");
    //   updateToast(toastId, "warning", "The password needs to be more secure.");
    //   return;
    // }

    try {
      setError("");
      const response = await signUp(  
        username,
        email,
        password,
      );

      if (response.error === "User already exists with this email.") {
        updateToast(toastId, "warning", "Please use a different email.");
        setError(response.data);
        return;
      }
      if (response.status === "success") {
        updateToast(toastId, "success", "Account created successfully!");

        setShowExitAnimation(true);
        setTimeout(() => {
          router.push("/login");
        }, 800);
      } else {
        updateToast(toastId, "error", response.data || "Signup failed");
        setError(response.data);
      }

    } catch (error) {
      console.error("Signup error:", error);
      const message =
        error.data || "Signup failed. Please try again.";

      updateToast(toastId, "error", "Signup failed. Please try again.");
      setError(message);
    }
  };

  const handleNavigateToLogin = () => {
    setShowExitAnimation(true);
    setTimeout(() => {
      router.push("/login");
    }, 800);
  };

  return (
    <div className='register-page'>
      <div className='register-box-container'>
        <h1 className='title'>Register</h1>
        <form>
          <div className='input-field'>
            <input autoComplete="off" id="username" placeholder="Username" className="input-field" name="username" type="text" 
            value={username} onChange={(e) => setUsername(e.target.value)} required/><span className='required-field'>*</span>
          </div>
          <div className='input-field'>
            <input autoComplete="off" id="email" placeholder="Email" className="input-field" name="email" type="email" 
            value={email} onChange={(e) => setEmail(e.target.value)} required/><span className='required-field'>*</span>
          </div>
          <div className='input-field'>
            <input autoComplete="off" id="password" placeholder="Password" className="input-field" name="password" type="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6"/><span className='required-field'>*</span>
          </div>
          {error && <p className="register-error-message">{error}</p>}
          <button className="btn register-btn" type="submit">Register</button>
          <a href="/login" className="btn-link">Already have an account?</a>
        </form>
      </div>
    </div>
  )
}
