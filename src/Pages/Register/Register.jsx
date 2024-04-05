import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
import './Regsiter.scss'
import axios from 'axios'

function Register() {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
   })

   const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setUserData((prev) => {
         return{...prev, [name]: value}
      })
   }

   const registerHandler = async (e) => {
      if(userData.firstName && userData.lastName && userData.email && userData.password === userData.rePassword){
         const {status} = await axios.post('http://localhost:3000/users', userData);
         if(status === 201){
            alert("succesful");
            navigate('/')
         }
      }else{
         alert('wrong')
      }
   }

   console.log(userData);

  return (
    <div className="register">
      <div className="register__input">
        <input onChange={inputHandler} name="firstName" type="text" placeholder="First Name" />
        <input onChange={inputHandler} name="lastName" type="text" placeholder="Last Name"/>
        <input onChange={inputHandler} name="email" type="text" placeholder="Email"/>
        <input onChange={inputHandler} name="password" type="text" placeholder="Password"/>
        <input onChange={inputHandler} name="rePassword" type="text" placeholder="Re Password"/>
      <button onClick={registerHandler}>Register</button>
      </div>
    </div>
  );
}

export default Register;
