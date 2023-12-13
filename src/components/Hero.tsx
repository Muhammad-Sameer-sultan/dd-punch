import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="my-10 max-sm:px-4 px-20 max-lg:text-[46px] max-slg:text-[36px] max-md:text-[22px] text-[60px] text-black font-work-sans">
        <div className="flex items-center  justify-center gap-x-4">
          <Image
            width={70}
            height={70}
            alt=""
            src="/star-3.svg"
            className="max-md:w-[35px] max-md:h-[35px]"
          />
          <h2 className="text-inherit   uppercase font-black font-inherit text-center">
            Embrace the Digital
          </h2>
          <Image
            width={70}
            height={70}
            alt=""
            className="max-md:w-[35px] max-md:h-[35px]"
            src="/star-3.svg"
          />
        </div>
        <h2 className="mt-[-1rem] text-inherit uppercase font-black font-inherit text-center">
          {" "}
          Revolution.
        </h2>
        <div className="mt-8 relative grid place-items-center">
          <button className="cursor-pointer max-slg:text-[14px] text-[18px]   capitalize font-semibold font-poppins text-white [border:none] max-slg:py-2 max-slg:max-px-[20px] py-4 px-[35px] bg-darkorange-100  rounded-26xl">
            get a qoute
          </button>

          <div className=" absolute grid place-items-center max-slg:gap-y-2 gap-y-4 right-0 top-0  text-3xl font-poppins">
            <div className=" relative rounded-[50%] bg-linen hover:bg-darkorange-200 hover:cursor-pointer max-xsm:w-[35px] max-xsm:h-[35px] max-slg:w-[60px] max-slg:h-[60px] w-[90px] h-[90px]">
              <Image
              width={30}
              height={60}
                className="absolute max-xsm:top-[0] top-[22%] left-[38%] max-xsm:w-[9px] max-xsm:h-[20px] max-slg:w-[15.6px] max-slg:h-[36px] w-[22.1px] h-[53px]"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
            <div className=" capitalize max-slg:text-[14px] max-xsm:text-[10px] font-semibold">scroll down</div>
          </div>
        </div>

        <section className="grid grid-cols-5  mt-24 gap-3  items-center justify-center">
          <div className="col-start-1  self-start">
            <h6 className="text-xl font-medium font-poppins text-darkorange-100">
              DD Punch
            </h6>
            <h3 className="m-0 text-3xl  uppercase font-bold  inline-block ">
              Where Ideas Meet the Digital Frontier.
            </h3>
          </div>
          <img
            className="col-start-1 row-start-2 mt-[-12rem]   rounded-xl  object-cover"
            alt=""
            src="/rectangle-7@2x.png"
          />

       
          <img
            className="col-start-2 self-end  rounded-xl  object-cover"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <img
            className="col-start-2  row-start-2  pb-8 rounded-xl  object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <img
            className="col-start-3 row-span-2  rounded-xl  h-full object-cover"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <img
            className=" col-start-4 pt-8 row-start-1  rounded-xl  object-cover"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <img
            className=" col-start-4 self-start row-start-2  rounded-xl  object-cover"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <img
            className=" col-start-5  row-span-2  rounded-xl  object-cover"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </section>
         <hr  className="bg-black mt-14" />
        {/* <img
        className="absolute top-[615px] left-[150px] rounded-xl w-[284px] h-[299px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <img
        className="absolute top-[722px] left-[466px] rounded-xl w-[293px] h-[299px] object-cover"
        alt=""
        src="/rectangle-8@2x.png"
      />
      <img
        className="absolute top-[503px] left-[1162px] rounded-xl w-[293px] h-[299px] object-cover"
        alt=""
        src="/rectangle-10@2x.png"
      />
      <img
        className="absolute top-[834px] left-[1162px] rounded-xl w-[293px] h-[193px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <img
        className="absolute top-[497px] left-[466px] rounded-xl w-[293px] h-[193px] object-cover"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
        className="absolute top-[611px] left-[1487px] rounded-xl w-[283px] h-[299px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute top-[435px] left-[791px] rounded-xl w-[338px] h-[643px] object-cover"
        alt=""
        src="/rectangle-9@2x.png"
      />
     
   
      <h3 className="m-0 absolute top-[470px] left-[150px] text-9xl leading-[35px] uppercase font-bold font-inherit inline-block w-[299px]">
        Where Ideas Meet the Digital Frontier.
      </h3>
      <div className="absolute top-[430px] left-[150px] text-xl font-medium font-poppins text-darkorange-100">
        DD Punch
      </div>
      <button className="cursor-pointer [border:none] py-5 px-[45px] bg-darkorange-100 absolute top-[283px] left-[calc(50%_-_100px)] rounded-26xl overflow-hidden flex flex-row items-center justify-center">
        <div className="relative text-lg capitalize font-semibold font-poppins text-white text-left">
          get a qoute
        </div>
      </button>
      
      <div className="absolute top-[1116px] left-[0px] w-[1937px] h-[1322px] overflow-hidden" /> */}
      </section>

    </>
  );
};

export default Hero;
