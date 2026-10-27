import './RegisterPage.css'

export default function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='register-box-container'>
        <h1 className='title'>Register</h1>
        <form>
          <div className='input-field'>
            <input autocomplete="off" id="username" placeholder="Username" className="input-field" name="username" type="text" />
          </div>
          <div className='input-field'>
            <input autocomplete="off" id="email" placeholder="Email" className="input-field" name="email" type="email" />
          </div>
          <div className='input-field'>
            <input autocomplete="off" id="password" placeholder="Password" className="input-field" name="password" type="password" />
          </div>
          <button class="btn register-btn" type="submit">Register</button>
          <a href="#" class="btn-link">Already have an account?</a>
        </form>
      </div>
    </div>
  )
}
