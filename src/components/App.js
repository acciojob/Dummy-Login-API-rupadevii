import React, { useState } from 'react'
import './../styles/App.css'
import { users } from '../users'

const App = () => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})

    function handleChange(e){
        const {name, value} = e.target;
        
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        let error = null
        const user = users.find(user => user.email === formData.email);
        if(!user) {
            error = {email: true, msg: "User not found"};
            
        }

        if(user && formData.password !== user.password){
            error = {password: true, msg: "Password Incorrect"}
        }

        if(error){
            setTimeout(() => {
                setErrors(error)
                console.log(error.msg)
            }, 3000)
        }

        else{
            setTimeout(() => {
                console.log(user)
            }, 3000)
            setErrors({});
        }
        
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    id="input-email"
                    placeholder='Enter email'
                    onChange={handleChange}
                    value={formData.email}/>
                {errors.email && (<p id="user-error">{errors.msg}</p>)}
                <input 
                    type="password"
                    name="password"
                    id="input-password"
                    placeholder='Enter password'
                    onChange={handleChange}
                    value={formData.password}/>
                {errors.password && (<p id="password-error">{errors.msg}</p>)}
                <button id="submit-form-btn" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default App
