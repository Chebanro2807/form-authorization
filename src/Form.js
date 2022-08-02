import React  from 'react';
import './App.css';
import { useState } from 'react';

export default function Form (){
    const correctEmail = 'artem@ithillel.ua';
    const correctPassword = '123456';
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const emailOnChange = (event)=> {
        setEmail(event.target.value)
    }
    const passwordOnChange = (event)=>{
        setPassword(event.target.value)
    }

    function loginIn(event) {
        event.preventDefault();
        if(!email.match(emailPattern)) {
            setErrorMessage('An invalid email, please check if your email is correct.')
        } else if (correctEmail !== email || correctPassword !== password){
            setErrorMessage('Wrong email or password, please try one more time.')
        } else if(correctEmail === email && correctPassword === password){
            setErrorMessage(`Welcome ${correctEmail}`)
        }
    }

    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit={loginIn} className="login-form">
                    <input type="text"  value={email} onChange={emailOnChange} placeholder="email"/>
                    <input type="password" value={password} onChange={passwordOnChange} placeholder="password"/>
                    <div className="message">{errorMessage}</div>
                    <button type="submit" disabled={!email || !password}>login</button>
                </form>
            </div>
        </div>
    )
}
