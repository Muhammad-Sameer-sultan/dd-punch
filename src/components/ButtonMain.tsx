'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ButtonMain = ({ Btntext,path ,submitType=false}: any) => {
  const router = useRouter();


  return (
    <button
    type={submitType?"submit":"button"}
      onClick={()=>{path?router.push(`/${path}`):""}}
      className="rounded-26xl capitalize font-semibold hover:border-darkorange-200 border hover:shadow-xl hover:text-darkorange-200 hover:bg-white bg-darkorange-200 py-4 px-[45px] text-base sm:text-lg text-white font-poppins"
    >
      {Btntext}
    </button>
  );
};

export default ButtonMain;
