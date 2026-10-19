import { Login, Person } from '@mui/icons-material'
import Link from "next/link";

import './UserAccountBox.css'

export default function UserAccountBox() {
  return (
    <div className='auth-user-container' >
      <div className='auth-buttons-container'>
        <Link className='auth-button register-account-button' title='Sign Up' href={"/register"}><span>Sign Up</span> <Person className='sign-up-ico'/> </Link>
        <Link className='auth-button login-account-button' title='Log In' href={"/login"}><span>Log In</span> <Login className='log-in-ico'/> </Link>
      </div>
    </div>
  )
}
