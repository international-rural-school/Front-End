import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signin } from "../actions/Index";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }


    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSignin = e => {
        e.preventDefault();
        this.props.login(this.state);
        setTimeout(() => this.props.history.push("/"), 500);
    };
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSignin} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email' 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            id='password' 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0 ">sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signin }, dispatch);
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignIn);
