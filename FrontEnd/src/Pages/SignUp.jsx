import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoCameraReverseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { handleUserCreateAccount } from "../Services/MoreOptions";
import useUserData from "../store/useUserData";
import { handleUserGoogleLoginORSingUp } from "../utils/googleLogin";
import { GoogleLogin } from "@react-oauth/google";
import BACKEND_URI from "../utils/BackEndURI";

export default function SignUp() {
  var navigate = useNavigate();
  const { setIsUserLogin, setUserData, userData } = useUserData();
  useEffect(() => {
    if (userData) {
      navigate("/");
    } else {
      return;
    }
  }, []);
  const UserImageRef = useRef(null);
  const GoogleBtnRef = useRef(null);
  const [UName, setUName] = useState("");
  const [UEmail, setUEmail] = useState("");
  const [UPass, setUPass] = useState("");
  const [UProfileImageEvent, setUProfileImageEvent] = useState(null);
  const [UserImage, setUserImage] = useState(
    "https://i.pinimg.com/originals/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"
  );

  const hanldeUserUplaodImage = async (e) => {
    var Res = await fetch(`${BACKEND_URI}/api/images/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: e.target.files[0],
      }),
    });
    setUProfileImageEvent(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(reader);
    reader.onloadend = () => {
      setUserImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUserImage(null);
    }
  };
  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    if (UPass.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!UProfileImageEvent) {
      toast.error("Please select a profile image");
      return;
    }
    // Add your form submission logic here
    toast.success("Form submitted");
    var Res = handleUserCreateAccount(UName, UEmail, UProfileImageEvent, UPass);
    if (Res) {
      toast.success("Account Created Successfully");
      setIsUserLogin(true);
      navigate("/");
      // window.location.href = '/'
    } else {
      toast.error("Error in Creating Account");
    }
  };

  const hanldeGoogleLoginClick = async (credentialResponse) => {
    const Res = await handleUserGoogleLoginORSingUp(credentialResponse);

    console.log(Res);
    if (Res.success) {
      toast.success("Google Login/Sign Up Successful");
      setUserData(Res.UserData);
      localStorage.setItem("QeeeratUserData", JSON.stringify(Res.UserData));
      setIsUserLogin(true);
      navigate("/");
    } else {
      toast.error("Google Login/Sign Up Failed");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-start bg-black text-white w-full">
      <div className="w-full h-[150vh] hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/originals/a6/9b/72/a69b72f5366387c87320bef3762ade07.jpg"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full  mt-5 flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => handleUserFormSubmit(e)}
          className="md:w-96  w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-gray-200 font-medium">Sign Up</h2>
          <p className="text-sm text-gray-400/90 mt-3">
            Create Your Acount To Countinue
          </p>

          <button
          className="mt-8 hover:opacity-90 transition-all flex items-center justify-center"
          >
            <GoogleLogin
              text="continue_with"
              logo_alignment="center"
              
              width="320"
              shape="circle"
              onSuccess={(credentialResponse) => {
                hanldeGoogleLoginClick(credentialResponse);
              }}
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full  h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign Up with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>
          {/* User profile  */}
          <div
            onClick={() => UserImageRef.current.click()}
            className="EditImage flex justify-center items-center relative h-fit cursor-pointer group  overflow-hidden"
          >
            <img
              className="w-20 object-cover h-20 rounded-full"
              src={UserImage}
              alt=""
            />
            <input
              onChange={(e) => hanldeUserUplaodImage(e)}
              type="file"
              hidden
              ref={UserImageRef}
            />
            <div
              //    onClick={() => GetFileExploreOpenRef.current.click()}
              className="Overlay opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-full  w-20 h-20 bg-[#3333337c]  flex flex-col justify-center items-center  duration-300 cursor-pointer"
            >
              <div className="Text">
                <IoCameraReverseOutline size={"40"} />
              </div>
            </div>
          </div>

          {/* User Name  */}
          <div className="flex items-center mt-6 mb-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <AiOutlineUser size={20} color="#6B7280" />
            <input
              type="text"
              onChange={(e) => setUName(e.target.value)}
              value={UName}
              placeholder="Full Name"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>
          {/* User Email  */}
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <AiOutlineMail size={20} color="#6B7280" />
            <input
              type="email"
              onChange={(e) => setUEmail(e.target.value)}
              value={UEmail}
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>
          {/* User Password  */}
          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <BiLockAlt size={20} color="#6B7280" />
            <input
              type="password"
              onChange={(e) => setUPass(e.target.value)}
              value={UPass}
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <label class="flex gap-3 items-center cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-[#88358F] peer-checked:border-[#88358F] peer-checked:after:rounded peer-checked:after:absolute"></span>
              <span class="text-gray-700 select-none">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full hover:scale-95 active:opacity-0 duration-300 h-11 rounded-full text-white bg-[#88358F] hover:opacity-90 transition-all "
          >
            Create Account
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Have an account?
            <Link to="/login" className="text-indigo-400 ml-1 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
