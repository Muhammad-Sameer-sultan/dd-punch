import React from "react";

const About = () => {
  return (
    // <section id="#" className="font-work-sans">
    <section className="my-10  max-sm:px-4 px-20  text-black  font-poppins">
      <div className="flex justify-between">
        <div>
          <div className=" uppercase font-semibold text-darkorange-100">
            about us
          </div>
          <h1 className=" text-51xl leading-[70px] uppercase font-black font-work-sans  w-[732px]">
            Crafting Your Digital Future, Seamlessly.
          </h1>
        </div>
        <div>
          <img
            className="w-[122px] h-[122px]"
            alt=""
            src="/star-11.svg"
          />
        </div>
      </div>
      {/* 
      <img
        className="absolute top-[405px] left-[calc(50%_-_862.8px)] w-[122px] h-[122px]"
        alt=""
        src="/star-5.svg"
      /> */}
      {/* <button className="cursor-pointer max-slg:text-[14px] text-[18px] hover:bg-darkorange-300 hover:shadow-md   capitalize font-semibold font-poppins text-white [border:none] max-slg:py-2 max-slg:max-px-[20px] py-4 px-[35px] bg-darkorange-100  rounded-26xl">
        explore more
      </button> */}
      {/* \      <h1 className=" text-51xl leading-[70px] uppercase font-black font-work-sans inline-block w-[732px]">
        Crafting Your Digital Future, Seamlessly.
      </h1>
      <img
        className="absolute top-[466px] left-[150px] rounded-xl w-[609px] h-[622px] object-cover"
        alt=""
        src="/rectangle-14@2x.png"
      />
      <img
        className="absolute top-[466px] left-[1455px] rounded-xl w-[315px] h-[422px] object-cover"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <div className="absolute top-[586px] left-[810px] leading-[35px] inline-block w-[593px] opacity-[0.7]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
      
      <div className="absolute top-[1219px] left-[0px] w-[1920px] h-[1178px] overflow-hidden" /> */}
    </section>
  );
};

export default About;
