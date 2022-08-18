import React from 'react'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <div className='mt-12 mb-2 border-2 border-solid h-112 w-96'>
        <div className='flex justify-center w-full mt-4 h-28'>
          <img
            src={'images/Instagram_logo.svg'}
            alt="Logo" 
            width="180"
          />
        </div>
        <div className='flex flex-col items-center mt-8'>
          <input type="text" className="w-3/4 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100" placeholder='전화번호, 사용자 이름 또는 이메일' />
          <input type="password" className="w-3/4 mt-2 text-sm rounded form-input placeholder: text-slate-400 bg-neutral-100" placeholder='비밀번호' />
        </div>
      </div>
      <div className='h-20 border-2 border-solid w-96'>
        회원가입
      </div>
    </div>
  )
}
