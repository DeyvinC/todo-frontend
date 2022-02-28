import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from './ConnectAuth'
import { Button } from 'antd'


export default function Login({user, setUser}){
    const [email, setEmail] = useState();
    const [ password, setPassword ] = useState();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(alert)
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider).then(result => {
            setUser(result.user)
            navigate('tasklist')
        })
        .catch(alert)
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
            <label>
                Email: <input type='email' value={email} 
                onChange={e=> setEmail(e.target.value)}/>
            </label>
            <br />
            <label>
                Password: <input type='password' value={password} 
                onChange={e => setPassword(e.target.value)}/>
            </label>
            <br />
            <input type='submit' value='Login' />
        </form>
        </>
    )

}