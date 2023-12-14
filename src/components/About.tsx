import Image from "next/image";
import React from "react";

const About = () => {
  return (
    // <section id="#" className="font-work-sans">
    <section id='about-us' className="my-10  max-sm:px-4 px-20  text-black  font-poppins">
      <div className="flex justify-between max-md:gap-10 max-md:mx-[30px] gap-40  my-8 mx-[78px] items-center  ">
        <div className="">
          <div className="mb-3 uppercase font-semibold text-darkorange-100">
            about us
          </div>
          <h1 className="m-0 text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
            Crafting Your Digital Future, Seamlessly.
          </h1>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            className=""
            alt=""
            src="/star-11.svg"
          />
        </div>
      </div>

      <div className=" flex max-slg:flex-col justify-between max-md:gap-10 mt-5 gap-5 items-start">
        <div className="relative max-slg:grow ">
          <Image
            width={70}
            height={70}
            className=" absolute left-[-40px] top-[-40px] z-[-1] w-[80px] h-[80px]"
            alt=""
            src="/star-5.svg"
          />
        <Image
          width={1900}
            height={470}
          className="slg:w-[1900px]   rounded-xl "
          alt=""
          src="/rectangle-14@2x.png"
        />
          </div>

        <div className=" leading-[25px] max-lg:text-[14px] self-center  text-gray-900">
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="mt-5   cursor-pointer max-slg:text-[14px] text-[16px] hover:bg-darkorange-300 hover:shadow-md   capitalize font-semibold font-poppins text-white [border:none] max-slg:py-2 max-slg:max-px-[20px] py-2 px-[25px] bg-darkorange-100  rounded-26xl">
            explore more
          </button>
        </div>
        <div>
        <Image
        width={220}
        height={340}
          
          className=" rounded-xl slg:w-[1050px]  "
          alt=""
          src="/rectangle-15@2x.png"
        />
        </div>
      </div>
         </section>
  );
};

export default About;
