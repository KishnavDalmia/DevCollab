import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await axios.post('http://localhost:3000/api/auth/register', { name, username, email, password });
    if(result.status === 201){
        navigate('/dashboard');
    }else{
        setError(result.data.message || 'An Error Occurred');
    }
    setLoading(false);
  } 
  return (
    <div className='bg-black text-white h-screen w-screen'>
      <div className='p-4 flex justify-start gap-2 border-b border-neutral-800 font-medium'>
        <img src="/code.svg" alt="logo" width={32} />
        <h1 className='text-bold text-xl'>DevCollab</h1>
      </div>
      <div className="flex justify-center w-screen ">
        <div className='flex flex-col gap-2 mt-20 w-100'>
          <h1 className='text-3xl'>Register</h1>
          <h4 className='text-neutral-500/80 text-lg'>Create an account.</h4>
          <form onSubmit={handleSubmit} className='flex flex-col justify-start my-5 w-100 p gap-5'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} id="name" onChange= {(e) =>{setName(e.target.value)}} className='bg-neutral-700 text-white rounded-md h-8' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Username</label>
              <input type="text" name="username" value={username} id="username" onChange= {(e) =>{setUsername(e.target.value)}} className='bg-neutral-700 text-white rounded-md h-8' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={email} id="email" onChange= {(e) =>{setEmail(e.target.value)}} className='bg-neutral-700 text-white rounded-md h-8' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} id="password" onChange = {(e) => setPassword(e.target.value)} className='bg-neutral-700 text-white rounded-md h-8'/>
            </div>          
            {error && <p>{error}</p>}
            <button type="submit" className='text-center bg-white text-black hover:bg-neutral-200 rounded-md shadow-md hover:shadow-xl font-medium py-2 mt-3' disabled={loading}>
              {loading ? "Creating Account" : "Create Account"}
            </button>
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-neutral-700"></div>
              <span className="text-neutral-400">Or Continue With</span>
              <div className="flex-1 h-px bg-neutral-700"></div>
            </div>
            <div className="flex justify-center gap-12">
              <button className="px-12 py-2 rounded-md border border-neutral-500 hover:bg-blue-500 hover:text-black font-medium ease-in transition" disabled={loading}>Google</button>
              <button className="px-12 py-2 rounded-md border border-neutral-500  hover:bg-blue-500 hover:text-black font-medium ease-in transition" disabled={loading}>Github</button>
            </div>            
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Register