import React from "react";
import ButtonMain from "./ButtonMain";
import Image from "next/image";

const Pricing = () => {
  return (
    <section
      id="about"
      className="relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]        max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >

      <div className="flex justify-between max-slg:flex-col items-center max-slg:text-center">
        <div className="slg:w-1/2">
          <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            get 50% discount on your first order
            <Image
              src="/star-6.svg"
              className="inline-block ms-5"
              width={50}
              height={50}
              alt="star pricing"
            />
          </h2>
          <ButtonMain Btntext="order now" path="pricing" />
        </div>
        <div className="text-base  font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          debitis qui asperiores reprehenderit sapiente repudiandae? Dicta ipsum
          dolorem esse optio exercitationem error cumque eius, quas est saepe
          eveniet consequuntur?
        </div>
      </div>

      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-5 max-xmd:text-center font-work-sans mt-10  ">
        <div className=" ">
          <h3 className=" mb-5 text-13xl uppercase font-extrabold ">
            EMBROIDERY DIGITIZING
          </h3>
          <div
            className="rounded-2xl p-2 bg-white relative"
            style={{ boxShadow: "0rem 0rem  20px 0px  rgba(0,0,0,0.1)" }}
          >
            <Image src={'./star-6.svg'} width={50} height={50} alt="star"
            className="absolute top-[-1.4rem] left-[-1.8rem] z-[-1]" 
            />
            <div className="grid  max-xmd:grid-cols-1 grid-cols-3 gap-[2px] items-center justify-center rounded-2xl bg-gainsboro-200    text-center">
              <div>
                <div className=" text-xl    uppercase p-4 bg-white ">
                  {" "}
                  STARTER
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $9
                </div>
              </div>
              <div>
                <div className="text-xl   uppercase p-4 bg-white ">basic</div>

                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $18
                </div>
              </div>
              <div>
                <div className="text-xl  uppercase p-4 bg-white ">
                  {" "}
                  Standard
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $25
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <h3 className=" mb-5 text-13xl uppercase font-extrabold ">
            vector conversion
          </h3>
          <div
            className="relative rounded-2xl p-2 bg-white"
            style={{ boxShadow: "0rem 0rem  20px 0px  rgba(0,0,0,0.1)" }}
          >
             <Image src={'./star-6.svg'} width={50} height={50} alt="star"
            className="absolute top-[-1.4rem] right-[-1.8rem] z-[-1]" 
            />
            <div className="grid  max-xmd:grid-cols-1 grid-cols-3 gap-[2px] items-center justify-center rounded-2xl bg-gainsboro-200    text-center">
              <div>
                <div className=" text-xl    uppercase p-4 bg-white ">
                  {" "}
                  SIMPLISTIC
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $7
                </div>
              </div>
              <div>
                <div className="text-xl   uppercase p-4 bg-white ">
                  INTERMEDIATE
                </div>

                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $21
                </div>
              </div>
              <div>
                <div className="text-xl  uppercase p-4 bg-white ">
                  {" "}
                  REALISTIC
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-darkorange-200">
                  $52
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black  w-full h-[2px] mt-16 opacity-10" />
    </section>
  );
};

export default Pricing;
