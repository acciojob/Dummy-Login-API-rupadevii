import React, { useState } from 'react'
import './../styles/App.css'
import { users } from '../users'

const App = () => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({msg: ""})

    function handleChange(e){
        const {name, value} = e.target;
        
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value.trim()
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        let error = null
        const user = users.find(user => user.email === formData.email);
        if(!user) {
            error = {email: "User not found"};
            setTimeout(() => {
                setErrors(error)
                console.log(error.email)
            }, 3000)
            return;
            
        }

        if(user && formData.password !== user.password){
            error = {password: "Password Incorrect"};
            setTimeout(() => {
                setErrors(error)
                console.log(error.password)
            }, 3000)
        }

        // if(error){
        //     setTimeout(() => {
        //         setErrors(error)
        //         console.log(error)
        //     }, 3000)
        // }

        else{
            setErrors({msg: ""});
            setTimeout(() => {
                console.log(user)
            }, 3000)
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
                    value={formData.email}
                    required/>
                <p id="user-error">{errors.email}</p>
                <input 
                    type="password"
                    name="password"
                    id="input-password"
                    placeholder='Enter password'
                    onChange={handleChange}
                    value={formData.password}
                    required/>
                <p id="password-error">{errors.password}</p>
                <button id="submit-form-btn" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default App
