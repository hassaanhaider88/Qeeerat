import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hanldeUserLogin } from "../Services/MoreOptions";
import useUserData from "../store/useUserData";

const Login = () => {
  var navigate = useNavigate();
  const { setIsUserLogin } = useUserData();
  const [UEmail, setUEmail] = useState("");
  const [UPass, setUPass] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    var Res = hanldeUserLogin(UEmail, UPass);
    if (Res) {
      toast.success("Login Successful");
      setIsUserLogin(true);

      //   window.location.href = '/'
      navigate("/");
      // proceed to login
    } else {
      toast.error("Invalid Email or Password");
      // show error
    }
  };
  return (
    <div className="w-full bg-black min-h-screen flex justify-center items-center">
      <div className="w-1/2 h-[150vh] hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/originals/a6/9b/72/a69b72f5366387c87320bef3762ade07.jpg"
          alt="leftSideImage"
        />
      </div>
      <div className="w-1/2 h-full  flex justify-center items-center">
        <div className="bg-[#000000e5] shadow-xl shadow-[#88358f] text-gray-500  mx-4 md:p-6 p-4 text-left text-sm rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-400">
            Welcome Back
          </h2>
          <form
            onSubmit={(e) => handleLoginSubmit(e)}
            className="px-3  w-[400px] flex flex-col items-center justify-center"
          >
            {/* User Name  */}
            <span className="flex items-center mt-6 mb-6 w-full px-4 bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineMail size={20} color="#6B7280" />
              <input
                type="email"
                onChange={(e) => setUEmail(e.target.value)}
                value={UEmail}
                placeholder="Emial Address"
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm"
                required
              />
            </span>

            {/* User Password  */}
            <span className="flex items-center mt-6 mb-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <BiLockAlt size={20} color="#6B7280" />
              <input
                type="password"
                onChange={(e) => setUPass(e.target.value)}
                value={UPass}
                placeholder="Password"
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm "
                required
              />
            </span>
            <div className="text-right py-4">
              <Link
                to="/forgot-pass"
                className="text-blue-600 underline"
              >
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
            >
              Log in
            </button>
          </form>
          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              href="#"
              className="text-blue-500 ml-1 underline"
            >
              Signup
            </Link>
          </p>
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
          >
            <img
              className="h-4 w-4"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
              alt="googleFavicon"
            />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
