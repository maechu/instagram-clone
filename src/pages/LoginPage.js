import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  let [id, setId] = useState(false);
  let [pw, setPw] = useState(false);
  const [button, setButton] = useState(true);

  const realId = "keem";
  const realPw = "keem";

  const goToMain = () => {
    navigate("/main");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  function changeButton() {
    id.length >= 3 && pw.length >= 3 ? setButton(false) : setButton(true);
  }

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="mt-12 mb-2 border-2 border-solid h-112 w-96">
        <div className="flex justify-center w-full mt-4 h-28">
          <img src={"images/Instagram_logo.svg"} alt="Logo" width="180" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <input
            id="id"
            type="text"
            className="w-3/4 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={(e) => {
              setId(e.target.value);
            }}
            onKeyUp={changeButton}
          />
          <input
            id="password"
            type="password"
            className="w-3/4 mt-2 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100"
            placeholder="비밀번호"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
          />
          <button
            disabled={button}
            className="w-3/4 h-8 mt-4 text-sm font-medium text-white rounded opacity-50 disabled:bg-blue-300 enabled:bg-blue-700"
            onClick={(e) => {
              if (realId === id) {
                if (realPw === pw) {
                  e.stopPropagation();
                  goToMain();
                }
              } else {
                alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
              }
            }}
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
