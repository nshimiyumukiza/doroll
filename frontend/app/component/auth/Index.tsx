'use client'

import { useState } from "react"
import Login from "./Login";
import Register from "./Register";

const Index = () => {
    const[isLogin, setIsLogin] =useState<Boolean>(true);
    const[isRegister, setIsRegister] = useState<Boolean>(false);

    const handleLogin = ():void =>{
        setIsLogin(true);
        setIsRegister(false)

    }
    const handleRegister = ():void => {
        setIsLogin(false);
        setIsRegister(true)
    }
  return (
    <div>
        {isLogin &&(<Login onRegister ={handleRegister}/>)}
        {isRegister &&(<Register onLogin ={handleLogin}/>)}
    </div>
  )
}

export default Index
cd