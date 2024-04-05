import React, { useState } from "react";
import './Login.scss'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Login() {
   const navigate = useNavigate()

   const[loginData, setLoginData] = useState({
      email: '',
      password: ''
   })

   const inputHandler =(e) => {
      const name = e.target.name;
      const value = e.target.value;

      setLoginData((prev) => {
         return{...prev, [name]: value}
      })
   }

   const loginHandler = async (e) => {
      e.preventDefault()
      if(loginData.email && loginData.password){
         const {data} = await axios.get('http://localhost:3000/users');
         const user = data.find(u => u.email === loginData.email)
         if(user){
            if(user.password === loginData.password){
                  if(loginData.email === 'admin@gmail.com'){
                     localStorage.setItem('user', JSON.stringify( {...user, role:777, token: Date.now()} ))
                     alert('success')
                     navigate('/')
                  }else{
                     localStorage.setItem('user', JSON.stringify({...user, role:1000, token: Date.now()} ));
                     navigate('/')
                     alert('success')
                  }
            }else{
               alert('wrong password')
            }
         }else{
            alert("wrong Email")
         }
         console.log(data); 
      }else(
         alert("error")
      )
   }

   console.log(loginData);

  return (
    <div className="login">
      <form className="login__input" onSubmit={loginHandler}>
        <input name="email" onChange={inputHandler} type="text" placeholder="Email"/>
        <input name="password" onChange={inputHandler} type="text" placeholder="Password"/>
        <button>Login</button>

      </form>
      <div >
      </div>
    </div>
  );
}

export default Login;
