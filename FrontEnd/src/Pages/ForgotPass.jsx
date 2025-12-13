import { Link, useNavigate } from "react-router-dom";
import UserData from "../Store/useUserData";
import { useEffect, useRef, useState } from "react";
import { handleUserRequestToResetPas } from "../Services/MoreOptions";
import LocalStorageWithTimer from "../Services/LocalStorageWithTimer";
import TwoFactorAuthOTP from "../Components/TwoFactorAuthOTP";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const { IsUserLogin } = UserData();
  const navigate = useNavigate();
  const EmailRef = useRef(null);
  const [IsResetLinkSend, setIsResetLinkSend] = useState(false);
  const [TimeToTerminateLSV, setTimeToTerminateLSV] = useState(0);

  // Redirect logged-in users
  useEffect(() => {
    if (IsUserLogin) navigate("/");
  }, [IsUserLogin, navigate]);

  // Check localStorage timer on mount and update countdown
  // useEffect(() => {
  //   const result = LocalStorageWithTimer("IsResetLinkSend");

  //   if (result?.success) {
  //     setIsResetLinkSend(true);
  //     setTimeToTerminateLSV(result.remainingTime);
  //   }

  //   const interval = setInterval(() => {
  //     const res = LocalStorageWithTimer("IsResetLinkSend");
  //     if (res?.success) {
  //       setTimeToTerminateLSV(res.remainingTime);
  //     } else {
  //       setIsResetLinkSend(false);
  //       setTimeToTerminateLSV(0);
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [IsResetLinkSend]);

  const handleSendPassBTN = async () => {
    if (
      EmailRef.current.value.trim() === "" ||
      !EmailRef.current.value.includes("@") ||
      !EmailRef.current.value.includes(".")
    ) {
      toast.warn("Please enter your email.");
      return;
    }
    const Res = await handleUserRequestToResetPas(EmailRef.current.value);

    if(Res){
      setIsResetLinkSend(true);
    }else{
      return;
    }
    
    // LocalStorageWithTimer("IsResetLinkSend", true, 5); // store for 2 minutes
  };

  // Helper to format milliseconds into mm:ss
  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1919] text-white flex justify-center items-center">
      <div className="bg-black text-white max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-4xl shadow-[0px_0px_10px_0px] shadow-black/10">
        {!IsResetLinkSend && (
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">
            Forget Password?
          </h2>
        )}
        {IsResetLinkSend ? (
          <div className="text-gray-400 text-center">
            <TwoFactorAuthOTP email={EmailRef.current.value} />
            <div className="text-yellow-400 mt-2  font-semibold">
              OTP Valid WithIn {formatTime(TimeToTerminateLSV)}
            </div>
          </div>
        ) : (
          <>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              ref={EmailRef}
              className="w-full border mt-1 border-gray-200/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              onClick={handleSendPassBTN}
              type="button"
              className="w-full my-3 bg-gray-300 active:scale-95 transition py-2.5 rounded text-black"
            >
              Send OTP
            </button>
          </>
        )}
        {!IsResetLinkSend && (
          <p className="text-center mt-4">
            Don’t have an account?
            <Link
              to="/sign-up"
              className="text-blue-500 ml-1 cursor-pointer underline"
            >
              Signup Now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
