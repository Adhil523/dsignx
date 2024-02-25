import React, { useState,useEffect } from 'react'
import '../pages/Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState('')
    const [pass,setPass]=useState('')
    const [data,setData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        getData()
    },[])

    const checker=()=>{
        var newdata=data.filter((d)=>{
            return user===d.name && pass===d.password
        }
        )
        newdata=newdata[0]
        console.log(newdata)
        if(!newdata){
            navigate('/')
            return
        }
        if(newdata.is_user){
            
            navigate(`/user/${newdata.id}`)
        }
        else{
            navigate(`/${newdata.id}`)
        }
        
    }
    

    const getData=async ()=>{
        const response=await fetch('http://127.0.0.1:8000/api/')
        const data=await response.json()
        setData(data)
        console.log(data)
    }
  return (
    <div className='bodies'>
    <div className='container'>
        <div className='design'>
            <div className='pill-1 rotate-45'></div>
            <div className='pill-2 rotate-45'></div>
            <div className='pill-3 rotate-45'></div>
            <div className='pill-4 rotate-45'></div>
        </div>
        <div className='login'>
            <h3 className='title'>User Login</h3>
            <div className="text-input">
                <i className="ri-user-fill"></i>
                <input type="text" placeholder="Username" onChange={(e)=>{
                    setUser(e.target.value)
                }}/>
            </div>
            <div className="text-input">
                <i className="ri-lock-fill"></i>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
            </div>
            <button className="login-btn" onClick={checker}>LOGIN</button>
            <a href="#" className="forgot">Forgot Username/Password?</a>
            <div className="create">
                <a href="#">Create Your Account</a>
                <i className="ri-arrow-right-fill"></i>
            </div>
        </div>
        </div>
        </div>
    
  )
}

export default Login