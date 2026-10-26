import './RegisterPage.css'

export default function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='register-box-container'>
        <h1 className='title'>Register</h1>
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
