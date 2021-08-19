import React, { useState } from 'react'
import classes from './singin.module.css'
import { Link } from 'react-router-dom'

export default function Singin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.singin}>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.headding}>
                    <h2>Sing In</h2>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.input}>
                        <label htmlFor='Email'>Email Address</label>
                        <input id='Email' type='email' placeholder='Enter Your Email....' required onChange={e => { setEmail(e.target.value) }}></input>
                    </div>
                    <div  className={classes.input}>
                        <label htmlFor='Password'>Password</label>
                        <input id='Password' type='password' placeholder='Enter Your Password....' required onChange={e => { setPassword(e.target.value) }}></input>
                    </div>
                    <div >
                        <button type='submit'>SING IN</button>
                    </div>
                </div>
                <div>
                    <p>If you don't have an account <Link to='/register'>Create a new account</Link></p>
                </div>
            </form>
        </div>
    )
}
