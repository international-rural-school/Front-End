import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/index'



function NavTop(props) {
  const clearToken = e => {
    e.preventDefault();
    props.signOut();
  }
  return (
    <div>
      <nav className="nav-wrapper white">
        <div className="container">
          <NavLink to='/' className="brand-logo left">
            <img style={{height: '60px'}} src="../../ghana.png" alt=""/>
          </NavLink>
          
          {props.token ? 
          (
            <div>
              <ul className="right">
                <li><NavLink onClick={ clearToken }to='/' className="teal-text ">Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
              </ul>
            </div>
          ) : (
                <div>
                  <ul className="right">
                    <li><NavLink to='/signup' className="teal-text ">Sign Up</NavLink></li>
                    <li><NavLink to='/signin' className="teal-text ">Sign In</NavLink></li>
                  </ul>
                </div>
              )
          }
        </div>
      </nav>
    </div>
  )
}

const mstp = state => {
  return ({
    token: state.token
  })
}

const mapActionToProps = {
  signOut
}

export default connect(
  mstp,
  mapActionToProps
)(NavTop)
