"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ButtonMain from "./ButtonMain";

const Hero = () => {
  const scrollContiner = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    if (scrollContiner.current) {
      window.scrollBy(0, scrollContiner.current.offsetHeight);
    }
  };
  return (
    <>
      <section
        ref={scrollContiner}
        className="my-10 max-sm:px-4 px-20 max-lg:text-[46px] max-slg:text-[36px] max-xxsm:text-[28px] text-[60px] text-black font-work-sans"
      >
        <div className="flex items-center  justify-center gap-x-4">
          <Image
            width={70}
            height={70}
            alt=""
            src="/star-3.svg"
            className="max-md:w-[35px] max-md:h-[35px] max-xxsm:hidden"
          />
          <h2 className="text-inherit   uppercase font-black font-inherit text-center">
            Embrace the Digital Revolution.
          </h2>
          <Image
            width={70}
            height={70}
            alt=""
            className="max-md:w-[35px] max-md:h-[35px] max-xxsm:hidden"
            src="/star-3.svg"
          />
        </div>

        <div className="mt-8 relative grid place-items-center">
          <ButtonMain Btntext="Get a Quote" path="/" />
          <div className=" absolute grid place-items-center max-slg:gap-y-2 gap-y-4 right-0 top-0 max-xsm:top-16 text-3xl font-poppins">
            <div
              className=" relative rounded-[50%] bg-linen  hover:bg-orange-200 hover:cursor-pointer max-xsm:w-[35px] max-xsm:h-[35px] max-slg:w-[60px] max-slg:h-[60px] w-[90px] h-[90px]"
              onClick={scrollDown}
            >
              <Image
                width={30}
                height={60}
                className="absolute   top-[22%] left-[38%] max-xsm:w-[9px] max-xsm:h-[20px] max-slg:w-[15.6px] max-slg:h-[36px] w-[22.1px] h-[53px]"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
            <div className=" capitalize max-slg:text-[14px] max-xsm:text-[8px] font-semibold">
              scroll down
            </div>
          </div>
        </div>

        <section className="  relative grid max-sm:grid-cols-1 max-slg:grid-cols-2 slg:grid-cols-5   place-items-center  mt-24 gap-5 max-w-[1400px] mx-auto  ">
          <div className=" col-start-1  max-slg:leading-10 leading-5 slg:self-start">
            <h6 className="max-slg:text-3xl text-base font-medium font-poppins text-darkorange-100">
              DD Punch
            </h6>
            <h3 className="max-slg:text-9xl text-3xl  uppercase font-bold  inline-block ">
              Where Ideas Meet the Digital Frontier.
            </h3>
          </div>
          <Image
            height={300}
            width={300}
            className="slg:col-start-1 slg:row-start-2 max-slg:h-96	max-slg:w-full xl:mt-[-12rem] max-xl:self-start   rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-7@2x.png"
          />

          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full self-end  rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full  slg:row-start-2  rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full h-full slg:row-span-2 rounded-xl   slg:object-cover"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full   rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full slg:row-start-2 slg:col-start-4 slg:self-start  rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <Image
            height={300}
            width={300}
            className="max-slg:h-96	max-slg:w-full row-span-2 rounded-xl  slg:object-cover"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </section>
        <hr className="bg-black mt-24 max-slg:mt-16" />
      </section>
    </>
  );
};

export default Hero;
