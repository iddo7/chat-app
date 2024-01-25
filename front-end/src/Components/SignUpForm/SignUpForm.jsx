import { useCallback, useEffect, useState } from 'react'
import { sha256 } from 'js-sha256'
import './SignUpForm.scss'

export default function SignUpForm() {    
    const [formData, setFormData] = useState({
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: ''
    })
    const [isTypingPassword, setIsTypingPassword] = useState(false)
    const [isTypingPasswordConfirm, setIsTypingPasswordConfirm] = useState(false)


    const [signUpConfirmed, setSignUpConfirmed] = useState(false)
    const [responseStatus, setResponseStatus] = useState('')

    const { email, emailConfirm, password, passwordConfirm } = formData

    const emailConfirmed = useCallback(() => email !== '' && email === emailConfirm, [email, emailConfirm])
    const passwordConfirmed = useCallback(() => password !== '' && password === passwordConfirm, [password, passwordConfirm])

    useEffect(() => {
        setSignUpConfirmed(emailConfirmed() && passwordConfirmed())
    }, [email, emailConfirm, password, passwordConfirm, emailConfirmed, passwordConfirmed])

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

    function handleInputChange(e) {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
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
            let localStatus = ''
            let status = response.status

            if (status >= 200 && status < 300) {
                localStatus = 'success'
            } 
            else if (status >= 500 && status < 600) {
                localStatus = 'error'
            }

            if (status == 501) localStatus = 'email-exists'

            console.log(localStatus)
            setResponseStatus(localStatus)
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
                {responseStatus == '' && (
                    <form onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <label htmlFor='email' className='form-label'>Email address</label>
                            <input 
                                name='email'
                                value={email}
                                onChange={handleInputChange}
                                type='email' 
                                autoComplete='email'
                                className='form-control' 
                                id='email' 
                            />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='emailConfirm' className='form-label'>Confirm email address</label>
                            <input 
                                name='emailConfirm'
                                value={emailConfirm}
                                onChange={handleInputChange}
                                type='email' 
                                autoComplete='confirm-email'
                                className='form-control' 
                                id='emailConfirm' 
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input 
                                name='password'
                                value={password}
                                onChange={handleInputChange}
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
                                name='passwordConfirm'
                                value={passwordConfirm}
                                onChange={handleInputChange}
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
                {responseStatus == 'email-exists' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                        An account with this email already exists.
                    </div>
                )}


            </div>
        </>
    )
}