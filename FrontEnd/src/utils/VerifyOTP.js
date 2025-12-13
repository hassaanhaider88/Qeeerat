import BACKEND_URI from "./BackEndURI";

async function VerifyOTP(otp, email) {
  try {
    console.log(otp, email);
    // Make API call to verify OTP
    // const response = await fetch(`${BACKEND_URI}/api/user/verify-otp`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ otp, email }),
    // });
    // var Res = await response.json();
    return Res;
  } catch (error) {
    console.log("somthing went worng");
    return false;
  }
}

export default VerifyOTP;
