import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const signup = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading} = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
    }
  return (
    <div className='flex items-center justify-center'>
    <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center items-start'>
        <h3>Signup</h3>
        <label>Email: </label>
        <input className='border' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>
        <input className='border-2' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={isLoading}>Signup</button>
        {error && <div className='text-red-300'>{error}</div>}
    </form>
    </div>
  )
}

export default signup