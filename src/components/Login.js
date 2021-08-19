import React from 'react'
import './log.css'

function Login() {
    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name required />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name required />
                        <label>Password</label>
                    </div>
                    <button type="text">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default Login;