import Image from "next/image";

const dummy: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `;
const serviceItems = [
  {
    img: "/frame1.svg",
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
    title: "color separation",
    description: dummy,
  },
  {
    img: "/frame7.svg",
    title: "logo embroidery digitizing",
    description: dummy,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="my-10  max-sm:px-4 px-20  text-black  font-poppins"
    >
      <div className="flex justify-between max-md:gap-10 max-md:mx-[30px] gap-40  my-8 mx-[78px] items-center  ">
        <div className="">
          <div className="mb-3 uppercase font-semibold text-darkorange-100">
            our services
          </div>
          <h2 className="m-0 text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
            Embrace the Digital Revolution.
          </h2>
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>

      <section className="relative grid grid-cols-3 gap-5">

{
  serviceItems.map(item=><div key={item.title} className="flex flex-col gap-4 rounded-2xl p-5  border-[1px] border-solid border-gainsboro-200">
  <div>
    <div className="border-2 border-darkorange-200 rounded-full inline-block p-5">
      <Image
        width={60}
        height={60}
        className="  w-14 h-14  shrink-0 z-[1]"
        alt=""
        src={item.img}
      />
    </div>
  </div>
  <h5 className=" uppercase font-black">
    {item.title}
  </h5>
  <div className="text-base font-poppins  opacity-[0.5]">{item.description}</div>

 
</div> 
)
}
     
      </section>
    </section>
  );
};

export default Services;
