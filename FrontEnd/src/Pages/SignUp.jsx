import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoCameraReverseOutline } from "react-icons/io5";
export default function SignUp() {
  return (
    <div className="flex h-[700px] bg-black text-white w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96  w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-200 font-medium">Sign Up</h2>
          <p className="text-sm text-gray-400/90 mt-3">
            Create Your Acount To Countinue
          </p>

          <button
            type="button"
            className="w-full hover:bg-gray-500/10 duration-200 transition-all cursor-pointer active:scale-90 mt-8 bg-gray-300/10 flex items-center justify-center h-12 rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign Up with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>
          {/* User profile  */}
          <div className="EditImage flex justify-center items-center relative h-fit cursor-pointer group  overflow-hidden">
            <img
              className="w-20  h-20 rounded-full"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/profile/sampleProfile.jpg"
              alt=""
            />
            <div
              //    onClick={() => GetFileExploreOpenRef.current.click()}
              className="Overlay opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-full  w-20 h-20 bg-[#3333337c]  flex flex-col justify-center items-center  duration-300 cursor-pointer"
            >
              <div className="Text">
                <IoCameraReverseOutline size={"40"} />
              </div>
              <input
                type="file"
                hidden
                //  onChange={(e) => hanleUserProfileChange(e)}
                //  ref={GetFileExploreOpenRef}
                id=""
              />
            </div>
          </div>

          {/* User Name  */}
          <div className="flex items-center mt-6 mb-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <AiOutlineUser size={20} color="#6B7280" />
            <input
              type="text"
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
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <Link to="/forgot-pas" className="text-sm underline" href="">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:underline"
              href="#"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
