import { useState } from 'react';
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

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
      updateToast(toastId, "error", emailError || "Please enter Email properly");
      return false;
    }
  };

  const handleEmailChange = (e) => {
    const emailVar = e.target.value;
    setEmail(emailVar);
    validateEmail(emailVar);
  };

  const handleNavigateToSignIn = () => {
    // setShowExitAnimation(true);
    setTimeout(() => {
      router.push("/register");
    }, 100);
  };

  return (
    <div className='login-page'>
      <div className='login-box-container'>
        <h1 className='title'>Log In!</h1>
        <form>
          <div className='input-field'>
            <input autoComplete="off" id="email" placeholder="Email" className="input-field" name="email" type="email"
            value={email} onChange={(e) => handleEmailChange(e.target.value)} required />
          </div>
          <div className='input-field'>
            <input autoComplete="off" id="password" placeholder="Password" className="input-field" name="password" type="password"
            value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" />
          </div>
          <button className="btn login-btn" type="submit">Login</button>
          <div><a href="#" className="btn-link">Forgot your password?</a> <a onClick={handleNavigateToSignIn}></a></div>
        </form>
      </div>
    </div>
  )
}