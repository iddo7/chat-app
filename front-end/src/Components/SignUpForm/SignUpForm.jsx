import { useEffect, useState } from 'react'
import { sha256 } from 'js-sha256'
import './SignUpForm.scss'

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')

    const [password, setPassword] = useState('')
    const [isTypingPassword, setIsTypingPassword] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isTypingPasswordConfirm, setIsTypingPasswordConfirm] = useState(false)

    const [signUpConfirmed, setSignUpConfirmed] = useState(false)

    const [responseStatus, setResponseStatus] = useState(-1)


    useEffect(() => {
        setSignUpConfirmed(emailConfirmed() && passwordConfirmed())
    }, [email, emailConfirm, password, passwordConfirm])

    function handleSubmit(e) {
        e.preventDefault()
        if (!signUpConfirmed) return

        const user = {
            id: crypto.randomUUID(),
            email: email,
            password: sha256(password.trim())
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
            let status = ''
            if (response.status >= 200 && response.status < 300) {
                status = 'success'
            } else if (response.status >= 500 && response.status < 600) {
                status = 'error'
            }
            setResponseStatus(status)
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
                                onFocus={e => {
                                    setIsTypingPassword(true)
                                }}
                                onBlur={e => {
                                    setIsTypingPassword(false)
                                }}
                                type='password' 
                                autoComplete='password'
                                className='form-control' 
                                id='password'
                            />
                            {/* Display Alert */}
                            {!isTypingPassword && password.length < 8 && password.length > 0 && (
                                <div className='alert alert-danger mt-3' role='alert'>
                                    Password must be at least 8 characters long.
                                </div>
                            )}
                        </div>
                        <div className='form-row'>
                            <label htmlFor='passwordConfirm' className='form-label'>Confirm password</label>
                            <input 
                                value={passwordConfirm}
                                onChange={e => {
                                    setPasswordConfirm(e.target.value)
                                }}
                                onFocus={e => {
                                    setIsTypingPasswordConfirm(true)
                                }}
                                onBlur={e => {
                                    setIsTypingPasswordConfirm(false)
                                }}
                                type='password' 
                                autoComplete='confirm-password'
                                className='form-control' 
                                id='passwordConfirm' 
                            />
                            {/* Display Alert */}
                            {!isTypingPasswordConfirm && passwordConfirm.length < 8 && passwordConfirm.length > 0 && (
                                <div className='alert alert-danger mt-3' role='alert'>
                                    Both passwords must match.
                                </div>
                            )}
                        </div>



                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                )}

                {/* Display feedback based on signupStatus */}
                {responseStatus == 'success' && (
                    <div className='alert alert-success mt-3' role='alert'>
                        User created successfully!
                    </div>
                )}
                {responseStatus == 'error' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                        Error creating user. Please try again.
                    </div>
                )}


            </div>
        </>
    )
}