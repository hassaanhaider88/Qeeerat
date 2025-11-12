import { Link, useNavigate } from "react-router-dom";
import UserData from "../Store/useUserData";
import { useEffect, useState } from "react";
import { handleUserRequestToResetPas } from "../Services/MoreOptions";

const ForgotPass = () => {
  const { IsUserLogin } = UserData();
  const navigate = useNavigate();
  const [IsResetLinkSend, setIsResetLinkSend] = useState(false);
  useEffect(() => {
    if (IsUserLogin) {
      navigate("/");
    } else {
      return;
    }
  }, []);
  const handleSendPassBTN = () => {
    var Res = handleUserRequestToResetPas();
    if (!Res) return;
    setIsResetLinkSend(true);
  };
  return (
    <div className="w-full min-h-screen bg-[#1a1919] text-white flex justify-center items-center">
      <div className="bg-black text-white max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-4xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">
          Forget Password?
        </h2>
        {IsResetLinkSend ? (
          <h1 className="text-gray-500">
            Code Is Sended To Your Email Please Check On{" "}
            <Link
              to="/login"
              className="text-blue-500 ml-1 cursor-pointer underline"
            >
              Login
            </Link>
          </h1>
        ) : (
          <>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full border mt-1 border-gray-200/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
              type="email"
              placeholder="Enter your email"
            />
            <button
              onClick={() => handleSendPassBTN()}
              type="button"
              className="w-full my-3 bg-gray-300 active:scale-95 transition py-2.5 rounded text-black"
            >
              Send Reset Link
            </button>
          </>
        )}
        <p className="text-center mt-4">
          Don’t have an account?
          <Link
            to="/sign-up"
            className="text-blue-500 ml-1 cursor-pointer underline"
          >
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
