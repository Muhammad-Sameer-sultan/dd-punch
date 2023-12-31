import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

const About = () => {
  return (
    <section
      className="mt-14 relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]      max-sm:text-center  max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
      <div className="flex justify-between gap-3 items-center  ">
        <div className="slg:w-2/4">
        <h6 className="text-darkorange-200 text-xl font-poppins uppercase">About us </h6>
          <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            Crafting Your Digital Future, Seamlessly.
          </h2>
          <ButtonMain Btntext="Read more" path="about" />
        </div>
        <Image width={80} height={80} className="" alt="" src="/star-11.svg" />
      </div>
      <div className=" grid lg:grid-cols-[auto,1fr,auto] sm:grid-cols-4 grid-cols-1  gap-5 items-center mt-20 ">
        <div className="max-lg:col-span-4 max-sm:col-span-1 flex items-center justify-center ">
          <div className="relative  ">
            <Image
              width={100}
              height={100}
              className=" absolute left-[-60px] top-[-60px] z-[-1] max-slg:mt-5 "
              alt=""
              src="/star-5.svg"
            />
            <Image
              width={400}
              height={500}
              className=" rounded-xl  z-10 max-xslg:w-72  "
              alt=""
              src="/rectangle-14@2x.png"
            />
          </div>
        </div>

        <div className="max-lg:col-span-3 max-sm:col-span-1 text-darkslategray text-base font-normal font-poppins leading-[25px] max-xslg:leading-[25px] max-xslg:text-[14px] ">
          <p className="mb-5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        
          <ButtonMain  Btntext="Explore more" path="about" />

        </div>

        <Image
          width={220}
          height={300}
          className="rounded-xl self-start max-xslg:w-44 max-sm:col-span-1  max-lg:w-full  max-sm:px-20"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
    </section>
  );
};

export default About;
