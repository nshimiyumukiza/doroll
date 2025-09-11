"use client";
import { MdOutlinePerson, MdEmail, MdLockOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Button, Input, Space } from "antd";
import { IoMdLogIn } from "react-icons/io";

type loginProps = {
    onLogin : () => void
}

const Register = ({onLogin}:loginProps) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center space-y-6 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 md:w-[600px]">
        <h1 className="text-2xl text-black font-bold mb-6">
          Register
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
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
                <Input.Password id="password" placeholder="Enter password" />
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
                  id="confirm-password"
                  placeholder="Confirm password"
                />
              </Space>
            </div>
          </div>
        </form>

        <div className="flex justify-between items-center mt-6 text-gray-600">
          <h1>
            Register with{" "}
            <span className="text-lg font-bold border-b">
              terms and conditions
            </span>
          </h1>
          <div className="flex px-3 py-2 bg-lime-300 rounded-lg space-x-3 items-center">
            <button>Register</button>
            <IoMdLogIn size={20} />
          </div>
        </div>
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
