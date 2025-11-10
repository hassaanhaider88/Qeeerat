import { useState } from "react";
import CtmButton from "../Components/CtmButton";
import {
  hanldeUserClickOldPassConfirm,
  hanldeUserUpdatePassword,
} from "../Services/MoreOptions";
import { toast } from "react-toastify";
import {Link} from 'react-router-dom'
const ChangePass = () => {
  const [OldPass, setOldPass] = useState("");
  const [IsOldPassConfirmed, setIsOldPassConfirmed] = useState(false);
  const [NewPass, setNewPass] = useState("");
  const [RepeatPass, setRepeatPass] = useState("");
  const hanldeClickConfirm = () => {
    if (OldPass === "") {
      toast.error("Please enter your old password");
      return;
    }
    const res = hanldeUserClickOldPassConfirm(OldPass);
    setIsOldPassConfirmed(res);
  };
  const handleUpdateClick = () => {
    if (NewPass === "" || RepeatPass === "") {
      toast.error("Please fill in all fields");
      return;
    }
    if (NewPass !== RepeatPass) {
      toast.error("New Password and Repeat Password do not match");
      return;
    }
    const res = hanldeUserUpdatePassword(NewPass);
    if (res) {
      toast.success("Password updated successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#1a1919] text-white flex justify-center items-center">
      <div className="bg-black text-white max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">
          Update Password?
        </h2>
        {!IsOldPassConfirmed && (
          <>
            <label htmlFor="password">Old Password</label>
            <input
              id="password"
              onChange={(e) => setOldPass(e.target.value)}
              value={OldPass}
              className="w-full border my-2 border-gray-200/30 focus:border-[#88358F]  outline-none rounded-3xl py-2.5 px-4"
              type="password"
              placeholder="Enter your old password"
            />
            <div
              onClick={hanldeClickConfirm}
              className="w-full flex justify-center items-center my-4"
            >
              <CtmButton Text={"Confirm"} />
            </div>
          </>
        )}
        {IsOldPassConfirmed && (
          <>
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              value={NewPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full border my-2 border-gray-200/30 focus:border-[#88358F]  outline-none rounded-3xl py-2.5 px-4"
              type="password"
              placeholder="Enter your New password"
            />
            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              id="repeat-password"
              value={RepeatPass}
              onChange={(e) => setRepeatPass(e.target.value)}
              className="w-full border my-2 border-gray-200/30 focus:border-[#88358F]  outline-none rounded-3xl py-2.5 px-4"
              type="password"
              placeholder="Repeat password"
            />
            <div
              onClick={handleUpdateClick}
              className="w-full flex justify-center items-center my-4"
            >
              <CtmButton Text={"Update"} />
            </div>
          </>
        )}

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to={'/sign-up'} className="text-blue-500 underline">Signup Now</Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePass;
