"use client";
import { MdOutlinePerson, MdEmail, MdLockOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Button, Input, Space } from "antd";
import { IoMdLogIn } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


type loginProps = {
    onLogin : () => void
}

interface registerData{
  firstName:string;
  lastName:string;
  email:string;
  phone: string;
  password:string;
  confrimPassword: string
}

const Register = ({onLogin}:loginProps) => {
  const router = useRouter()

  const [formData, setFormData] = useState<registerData>({
    firstName :"",
    lastName:"",
    email:"",
    phone:"",
    password:"",
    confrimPassword:""

  })

  const handleChange = (e:any) =>{
    const {name,value} = e.target;
    setFormData((prev) =>({...prev,[name]:value}))
    console.log(e.target.value)

  }

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    axios.post("http://localhost:3000/users/register",formData);
    setFormData({
      firstName:"",lastName:"",email:"",phone:"",password:"",confrimPassword:""

    })
    router.push('/dashboard')
    alert('register succefull!')
    console.log(formData)
  }
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center space-y-6 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 md:w-[600px]">
        <h1 className="text-2xl text-black font-bold mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <MdOutlinePerson className="text-lime-300 mr-2" size={20} />
              <input
              onChange={handleChange}
              value={formData.firstName}
              name="firstName"
                type="text"
                id="firstname"
                placeholder="Enter your first name"
                className="bg-transparent outline-none text-base font-light w-full py-2 text-gray-800"
              />
            </div>
          </div>

         
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <MdOutlinePerson className="text-lime-300 mr-2" size={20} />
              <input
              onChange={handleChange}
              value={formData.lastName}
              name="lastName"
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                className="bg-transparent outline-none w-full py-2 text-gray-800"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <MdEmail className="text-lime-300 mr-2" size={20} />
              <input
              onChange={handleChange}
              value={formData.email}
              name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full py-2 text-gray-800"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <FaPhoneAlt className="text-lime-300 mr-2" size={20} />
              <input
              onChange={handleChange}
              value={formData.phone}
              name="phone"
                type="number"
                id="phone"
                placeholder="250..."
                className="bg-transparent outline-none w-full py-2 text-gray-800"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <MdLockOutline className="text-lime-300 mr-2" size={20} />
              <Space direction="vertical" className="w-full">
                <Input.Password name="password" onChange={handleChange} value={formData.password} id="password" placeholder="Enter password" />
              </Space>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg bg-gray-100 mt-1 px-3">
              <MdLockOutline className="text-lime-300 mr-2" size={20} />
              <Space direction="vertical" className="w-full">
                <Input.Password
                  onChange={handleChange}
                  value={formData.confrimPassword}
                  name="confrimPassword"
                  id="confirm-password"
                  placeholder="Confirm password"
                />
              </Space>
            </div>
          </div>
            <div className="flex justify-between items-center mt-6 text-gray-600">
          <h1>
            Register with{" "}
            <span className="text-lg font-bold border-b">
              terms and conditions
            </span>
          </h1>
          <div className="flex px-3 py-2 bg-lime-300 rounded-lg space-x-3 items-center">
            <button type="submit">Register</button>
            <IoMdLogIn size={20} />
          </div>
        </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 md:w-[600px] flex justify-between items-center">
        <div>
          <h1 className="text-lg font-medium text-gray-600">
            Already have an account?
          </h1>
          <p onClick={onLogin} className="text-sm text-gray-500 font-normal">Go to Sign in</p>
        </div>
        <div onClick={onLogin} className="flex px-3 py-2 rounded-md space-x-3 border items-center hover:bg-lime-300 ">
          <button className="text-black text-sm font-bold px-3 py-1.5">Login</button>
          <IoMdLogIn className="text-lime-300 hover:text-black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Register;
