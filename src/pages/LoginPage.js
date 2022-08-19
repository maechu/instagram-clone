import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main", { replace: true });
  };

  const goToRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="mt-12 mb-2 border-2 border-solid h-112 w-96">
        <div className="flex justify-center w-full mt-4 h-28">
          <img src={"images/Instagram_logo.svg"} alt="Logo" width="180" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <input
            type="text"
            className="w-3/4 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="w-3/4 mt-2 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100"
            placeholder="비밀번호"
          />
          <button
            className="w-3/4 h-8 mt-4 text-sm font-medium text-white bg-blue-300 rounded opacity-50 cursor-not-allowed"
            onClick={goToMain}
          >
            로그인
          </button>
          <span className="mt-4 font-medium after: text-slate-500">또는</span>
          <span className="mt-20 font-medium after: text-slate-500">
            비밀번호를 잊으셨나요?
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center h-20 border-2 border-solid w-96">
        <span>계정이 없으신가요?</span>
        <span className="ml-2 font-medium text-blue-500" onClick={goToRegister}>
          가입하기
        </span>
      </div>
    </div>
  );
}
