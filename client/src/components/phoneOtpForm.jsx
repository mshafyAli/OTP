import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if(phoneNum.length < 10 || regex.test(phoneNum)){
        alert("Enter Valid Phone Number");
        return;
    }

  //call Backend Api
   setShowOtp(true); 


  };


  const onOtpSubmit = (otp) => {
    console.log("login Successfully",otp);

  }



  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            placeholder="Enter Phone Number"
            className="input"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
            <div>
                <p>Enter Otp set to {phoneNum}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>
        
      )}
    </div>
  );
};

export default PhoneOtpForm;
