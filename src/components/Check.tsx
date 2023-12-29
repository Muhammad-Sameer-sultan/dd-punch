import React from 'react'

const Check = () => {
  return (
    <section className="  relative grid max-md:grid-cols-1 md:grid-cols-5  max-slg:gap-1 mt-24 gap-3 max-w-[1400px] mx-auto  items-center justify-center">
    <div className="col-start-1 max-md:col-span-2 strech  leading-7 ">
      <h6 className="text-base font-medium font-poppins text-darkorange-100">
        DD Punch
      </h6>
      <h3 className="m-0 text-3xl  max-slg:text-xl uppercase font-bold  inline-block ">
        Where Ideas Meet the Digital Frontier.
      </h3>
    </div>
    <Image
    height={300}
    width={300}
      className="md:col-start-1 md:row-start-2 xl:mt-[-12rem] max-xl:self-start   rounded-xl  object-cover"
      alt=""
      src="/rectangle-7@2x.png"
    />

    <Image
    height={300}
    width={300}
      className="md:col-start-2 self-end  rounded-xl  object-cover"
      alt=""
      src="/rectangle-13@2x.png"
    />
    <Image
    height={300}
    width={300}
      className="md:col-start-2  md:row-start-2  pb-8 rounded-xl  object-cover"
      alt=""
      src="/rectangle-8@2x.png"
    />
    <Image
    height={300}
    width={300}
      className="md:col-start-3 md:row-span-2  rounded-xl  h-full object-cover"
      alt=""
      src="/rectangle-9@2x.png"
    />
    <Image
    height={300}
    width={300}
      className=" md:col-start-4 pt-8 md:row-start-1  rounded-xl  object-cover"
      alt=""
      src="/rectangle-10@2x.png"
    />
    <Image
    height={300}
    width={300}
      className=" md:col-start-4 self-start md:row-start-2  rounded-xl  object-cover"
      alt=""
      src="/rectangle-12@2x.png"
    />
    <Image
    height={300}
    width={300}
      className=" md:col-start-5  md:row-span-2  rounded-xl  object-cover"
      alt=""
      src="/rectangle-11@2x.png"
    />
  </section>
  )
}

export default Check