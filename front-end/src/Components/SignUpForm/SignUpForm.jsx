import { useState } from 'react'
import './SignUpForm.scss'

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }
        console.log(user)
    }

    return (
        <>
            <div className='wrapper bg-dark text-white p-3'>
                <h1 className='mb-3'>Sign Up</h1>
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
                            type='password' 
                            autoComplete='confirm-password'
                            className='form-control' 
                            id='passwordConfirm' 
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </>
    )
}