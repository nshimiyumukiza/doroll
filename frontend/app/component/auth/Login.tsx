
'use client'
import { MdEmail, MdLockOutline } from "react-icons/md";
import { Space, Input } from "antd";
import { IoMdLogIn } from "react-icons/io";

type LoginProps = {
  onRegister: () => void;
};

const Login = ({ onRegister }: LoginProps) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center space-y-6 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 md:w-[600px]">
        <h1 className="text-2xl text-black font-bold mb-6">Login</h1>

        <form>
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

        {/* Login button */}
        <div className="flex justify-between items-center mt-6 text-gray-600">
          <h1>
            Login{" "}
            <span className="text-lg font-bold border-b">terms and conditions</span>
          </h1>
          <div className="flex px-3 py-2 bg-lime-300 rounded-lg space-x-3 items-center">
            <button>Login</button>
            <IoMdLogIn size={20} />
          </div>
        </div>
      </div>

      {/* Sign up card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 md:w-[600px] flex justify-between items-center">
        <div>
          <h1 className="text-lg font-medium text-gray-600">
            You don't have an account?
          </h1>
          <p className="text-sm text-gray-500 font-normal">Go to Sign up</p>
        </div>
        <div
          onClick={onRegister} 
          className="flex px-3 py-2 rounded-md space-x-3 border items-center hover:bg-lime-300 cursor-pointer"
        >
          <button className="text-black text-sm font-bold px-3 py-1.5">
            Sign up
          </button>
          <IoMdLogIn className="text-lime-300 hover:text-black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Login;

