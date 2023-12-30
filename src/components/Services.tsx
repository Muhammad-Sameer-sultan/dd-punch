import Image from "next/image";
import ButtonMain from "./ButtonMain";

const dummy: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `;
const serviceItems = [
  {
    img: "/frame2.svg",
    title: "logo embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame3.svg",
    title: "cap embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame4.svg",
    title: "jacket back embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame5.svg",
    title: "left chest embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame6.svg",
    title: "3d puff embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame7.svg",
    title: "color separation",
    description: dummy,
  },
];

const Services = ({ showbg=false, displayTitleBtn = true }: any) => {
  return (
    <section
      className={`${
        showbg ? "bg-linen" : ""
      }   relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]        max-xl:text-[40px] text-[50px] text-black font-work-sans`}
    >
      <div className="flex justify-between max-slg:flex-col max-slg:items-center items-start max-slg:text-center">
        <div className="">
          <h6 className="mb-3 text-darkorange-200 text-base uppercase font-semibold">
            our services
          </h6>
          <h2 className="m-0 text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
            Embrace the Digital Revolution.
          </h2>
          {
            displayTitleBtn ? <ButtonMain Btntext='our services' path="services"/>:""
          }
          
        </div>
        <div className="text-base  font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          debitis qui asperiores reprehenderit sapiente repudiandae? Dicta ipsum
          dolorem esse optio exercitationem error cumque eius, quas est saepe
          eveniet consequuntur?
        </div>
      </div>

      <section className="relative  grid grid-cols-3 max-slg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10">
        {serviceItems.map((item) => (
          <div
            key={item.title}
            className="flex hover:text-white bg-white shadow-lg   flex-col gap-2 hover:bg-darkorange-200 hover:cursor-pointer rounded-2xl p-5  border-[1px] border-solid border-gainsboro-200"
          >
            <div>
              <div className="border bg-white  border-darkorange-200 rounded-full inline-block p-3">
                <Image
                  width={60}
                  height={60}
                  className="  w-10 h-10 shrink-0 z-[1]"
                  alt=""
                  src={item.img}
                />
              </div>
            </div>
            <h2 className=" uppercase font-black text-3xl font-work-sans">
              {item.title}
            </h2>
            <div className=" text-[12px] font-poppins   opacity-[0.5]">
              {item.description}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;
