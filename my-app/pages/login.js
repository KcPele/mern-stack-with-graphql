import React, {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const login = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
  return (
    <div className='flex items-center justify-center '>
    <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center items-start'>
        <h3>Signup</h3>
        <label>Email: </label>
        <input className=' border-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>
        <input className=' border-2' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={isLoading} className='p-2 bg-green-300'>Login</button>
    </form>
    {error & <div className='text-red-400'>{error}</div>}
    </div>
  )
}

export default login