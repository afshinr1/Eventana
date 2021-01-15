import React from 'react'

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { "username" : "billy", "password" : "bob"};
        fetch('/api/authentication/login', {method: 'POST', body:data,
        headers:{'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res.json).then(obj => console.log(obj));
    }
    const handleTest = () => {
        fetch('/api/authentication/test');
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input placeholder='Emter username' />
                <label>Password</label>
                <input placeholder='Enter password'/>
                
                <input type='submit'/>
            </form>
            <button onClick={handleTest}>Test</button>
        </div>
    )
}

export default Login
