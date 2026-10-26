import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className='login-page'>
      <div className='login-box-container'>
        <h1 className='title'>Log In!</h1>
        <form>
          <div className='input-field'>
            <input autocomplete="off" id="logemail" placeholder="Email" class="input-field" name="logemail" type="email" />
          </div>
          <div className='input-field'>
            <input autocomplete="off" id="logemail" placeholder="Email" class="input-field" name="logemail" type="email" />
          </div>
        </form>
      </div>
    </div>
  )
}
