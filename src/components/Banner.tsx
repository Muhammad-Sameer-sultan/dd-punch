'use client'
import Image from 'next/image'
import  { useRef } from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'

const Banner = ({title,path}:any) => {
    const scrollContiner = useRef<HTMLDivElement>(null)
    const scrollDown = () => {
      if (scrollContiner.current) {
        window.scrollBy(0, scrollContiner.current.offsetHeight);
      }
    };
  return (
    <div ref={scrollContiner} className='relative mb-6 bg-linen max-md:h-[50vh] h-[70vh] text-center grid place-items-center'>
        <div>
          <div className='flex gap-5'>
            <Image src={'/star-6.svg'}  width={80} height={80} className='max-sm:w-10'  alt='star' />
        <h2 className='text-[70px] max-sm:text-[45px] capitalize font-bold font-work-sans'> {title}</h2>
            <Image src={'/star-6.svg'}  width={80} height={80} className='max-sm:w-10'  alt='star' />

          </div>
        <span className='capitalize'> Home // {path}</span>
        </div>
   
        <div className="absolute bottom-10 right-32     ">
        <div
          onClick={scrollDown}
          className="text-[50px]  inline-block p-6 bg-darkorange-100 text-white rounded-full hover:cursor-pointer hover:shadow-xl hover:bg-white hover:text-darkorange-100"
        >
          <FaArrowDownLong className=" " />
        </div>
        <div className="font-normal text-xl max-slg:text-base font-work-sans">Scroll Down</div>
      </div>
    </div>
  )
}

export default Banner