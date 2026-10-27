import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className='login-page'>
      <div className='login-box-container'>
        <h1 className='title'>Log In!</h1>
        <form>
          <div className='input-field'>
            <input autocomplete="off" id="email" placeholder="Email" className="input-field" name="email" type="email" />
          </div>
          <div className='input-field'>
            <input autocomplete="off" id="password" placeholder="Password" className="input-field" name="password" type="password" />
          </div>
          <button class="btn login-btn" type="submit">Login</button>
          <a href="#" class="btn-link">Forgot your password?</a>
        </form>
      </div>
    </div>
  )
}