import { useEffect, useState } from 'react'
import { sha256 } from 'js-sha256'
import './SignUpForm.scss'

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [signUpConfirmed, setSignUpConfirmed] = useState(false)
    const [responseStatus, setResponseStatus] = useState(-1)

    useEffect(() => {
        setSignUpConfirmed(emailConfirmed() && passwordConfirmed())
    }, [email, emailConfirm, password, passwordConfirm])

    function handleSubmit(e) {
        e.preventDefault()

        if (!signUpConfirmed) return console.log('signup not confirmed')

        const user = {
            id: crypto.randomUUID(),
            email: email,
            password: sha256(password)
        }
        createUser(user)

    }

    function emailConfirmed() { 
        return (
            email != '' &&
            email === emailConfirm
        )
    }
    function passwordConfirmed() {
        return (
            password != '' &&
            password.length >= 8 &&
            password === passwordConfirm 
        )
    }

    function createUser(user) {
        fetch(`http://localhost:8081/users/create-min`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            setResponseStatus(response.status)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <>
            <div className='wrapper bg-dark text-white p-3'>
                <h1 className='mb-3'>Sign Up</h1>

                {/* Display form for Sign Up */}
                {responseStatus == -1 && (
                    <form onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <label htmlFor='email' className='form-label'>Email address</label>
                            <input 
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }}
                                type='email' 
                                autoComplete='email'
                                className='form-control' 
                                id='email' 
                            />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='emailConfirm' className='form-label'>Confirm email address</label>
                            <input 
                                value={emailConfirm}
                                onChange={e => {
                                    setEmailConfirm(e.target.value)
                                }}
                                type='email' 
                                autoComplete='confirm-email'
                                className='form-control' 
                                id='emailConfirm' 
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input 
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value)
                                }}
                                type='password' 
                                autoComplete='password'
                                className='form-control' 
                                id='password'
                            />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='passwordConfirm' className='form-label'>Confirm password</label>
                            <input 
                                value={passwordConfirm}
                                onChange={e => {
                                    setPasswordConfirm(e.target.value)
                                }}
                                type='password' 
                                autoComplete='confirm-password'
                                className='form-control' 
                                id='passwordConfirm' 
                            />
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                )}

                {/* Display feedback based on signupStatus */}
                {responseStatus >= 200 && responseStatus < 300 && (
                    <div className='alert alert-success mt-3' role='alert'>
                        User created successfully!
                    </div>
                )}
                {responseStatus >= 500 && responseStatus < 600 && (
                    <div className='alert alert-danger mt-3' role='alert'>
                        Error creating user. Please try again.
                    </div>
                )}


            </div>
        </>
    )
}