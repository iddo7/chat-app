import { useState } from 'react'
import './SignUpForm.scss'

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <div className="wrapper bg-dark text-white p-3">
                <h1 className="mb-3">Sign Up</h1>
                <form>
                    <div className="form-row">
                        <label for="email" class="form-label">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                        />
                    </div>
                    <div className="form-row">
                        <label for="emailConfirm" class="form-label">Confirm email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="emailConfirm" 
                        />
                    </div>
                    
                    <div className="form-row">
                        <label for="password" class="form-label">Password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="password"
                        />
                    </div>
                    <div className="form-row">
                        <label for="passwordConfirm" class="form-label">Confirm password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="passwordConfirm" 
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}