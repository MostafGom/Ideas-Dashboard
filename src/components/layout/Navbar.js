import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'


function Navbar(props) {
  const { auth, profile } = props
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />
  return (
    <nav className="nav-wrapper green darken-6" >
      <div className="container">
        <Link to='/' className="brand-logo right">🔥🔥IDEAS_ON_FIRE🔥🔥 </Link>
        {links}
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
