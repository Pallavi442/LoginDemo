import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import card from '../assets/card2.jpg';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    if (isOtpSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOtpSent, timer]);


  const validatePhoneNumber = (number) => {
    return /^[6-9]\d{9}$/.test(number); 
  };


  const handleSendOtp = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setIsOtpSent(true);
      setIsPhoneVerified(true);
      setTimer(30); 
    } else {
      alert('Invalid phone number. Please enter a valid 10-digit number.');
    }
  };


  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      setIsOtpValid(true);
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 1000);
    } else {
      alert('Invalid OTP. Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[100vh]">

      <div className="w-full lg:w-1/2 bg-[#546e7a] flex items-center justify-center p-5 lg:p-0">
        <img src={card} className="max-w-full max-h-full rounded-lg" alt="Credit Logo" />
      </div>

 
      <div className="w-full lg:w-1/2 p-5 flex items-center justify-center">
        <div className="w-full max-w-[400px]">
          <h3 className="text-center p-3 text-xl font-semibold">LOGIN</h3>
          <form className="w-full">

            <div className="mb-4">
              <label className="block p-2">Phone Number</label>
              <input
                type="text"
                className="w-full border-[1px] border-[#D9D9D9] p-3 rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isPhoneVerified}
                maxLength={10}
              />
              {!isOtpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full mt-2 bg-[#546e7a] text-white py-2 rounded-md disabled:bg-gray-400"
                  disabled={isPhoneVerified}
                >
                  Send OTP
                </button>
              )}
            </div>


            {isOtpSent && (
              <div className="mb-4">
                <label className="block p-2">Enter OTP</label>
                <input
                  type="text"
                  className="w-full border-[1px] border-[#D9D9D9] p-3 rounded-md"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={isOtpValid}
                  maxLength={6}
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full mt-2 bg-[#546e7a] text-white py-2 rounded-md disabled:bg-gray-400"
                  disabled={isOtpValid}
                >
                  Verify OTP
                </button>

                {timer > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    Resend OTP in {timer} seconds
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
