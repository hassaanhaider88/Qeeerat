import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hanldeUserConfirmEmailOTP } from "../Services/MoreOptions";

const TwoFactorAuthOTP = () => {
  const inputsRef = useRef([]);
  var navigate = useNavigate();

  // Handle typing
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = ""; // prevent non-digit input
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Handle paste (full 6-digit OTP)
  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(data)) {
      data.split("").forEach((num, i) => {
        if (inputsRef.current[i]) inputsRef.current[i].value = num;
      });
      inputsRef.current[inputsRef.current.length - 1].focus();
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input.value).join("");
    console.log(otp);
    const Res = hanldeUserConfirmEmailOTP(otp);
    if (Res) {
      toast.success("Entered OTP:", otp);
      navigate("/login");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" text-gray-400 max-w-96 mx-4 md:py-10 md:px-6 px-4 py-8 text-left text-sm rounded-lg transition-all shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-200">
        Two-factor Authentication
      </h2>
      <p className="py-4">
        Please enter the authentication code Sended To Your Email :
      </p>

      <div className="flex items-center justify-between mb-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            required
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="otp-input w-10 h-10 border border-gray-300 outline-none rounded text-center text-lg focus:border-[#88358F] transition duration-300"
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full my-1 bg-[#88358fda] py-2.5 rounded-3xl text-white active:scale-95 transition"
      >
        Verify
      </button>
    </form>
  );
};

export default TwoFactorAuthOTP;
