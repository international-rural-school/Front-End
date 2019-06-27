import React from 'react'
import { NavLink } from 'react-router-dom'

function NavTop() {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <NavLink to='/' className="brand-logo left">IRSR</NavLink>
          
          {localStorage.getItem("token") ? 
          (
            <div>
              <ul className="right">
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
              </ul>
            </div>
          ) : (
                <div>
                  <ul className="right">
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink to='/signin'>Sign In</NavLink></li>
                  </ul>
                </div>
              )
          }
   
        </div>
      </nav>
    </div>
  )
}

export default NavTop
