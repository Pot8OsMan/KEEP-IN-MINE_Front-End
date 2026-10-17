import './UserAccountBox.css'

export default function UserAccountBox() {
  return (
    <div className='auth-user-container' >
      <div className='auth-buttons-container'>
        <div className='auth-button register-account-button'>Sign Up</div>
        <div className='auth-button login-account-button'>Log In</div>
      </div>
    </div>
  )
}
