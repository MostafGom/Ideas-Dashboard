import React from 'react'
import { NavLink } from 'react-router-dom'

function SignOutLinks() {
  return (
    <ul className="left">
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
      <li><NavLink to='/signin'>Log In</NavLink></li>
    </ul>
  )
}

export default SignOutLinks
