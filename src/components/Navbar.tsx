"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const currentRoute = usePathname();

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/services', label: 'services' },
    { id: '/pricing', label: 'pricing' },
    { id: '/portfolio', label: 'porfolio' },
    { id: '/about-us', label: 'about us' },
    { id: '/contact-us', label: 'contact us' },
  ];
 
  return (
    <nav className='bg-white h-[100px] px-[72px] flex justify-between items-center max-xmd:p-[20px] max-slg:hidden'>
      <div>
      <Image className='' src={"/next.svg"} width={200} height={100} alt="logo here"/>
      </div>
      <ul className='nav-bar flex gap-8 font-semibold text-[#1D1C1C] text-lg'>
      {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.id} 
             className={currentRoute === item.id ? 'nav-active' : 'nav-links '}>
              {item.label}
            </Link>
          </li>
        ))}
       </ul>
      <div className='flex items-center gap-6 '>
      <Image
      width={28}
      height={28}
        className=" overflow-hidden"
        alt="search"
        src="/frame.svg"
      />
      <div className="relative rounded-[50%] bg-darkslategray w-[60px] h-[60px] z-[0]" >
        <Image
        width={28}
        height={28}
          className="absolute my-0 mx-[!important] top-[16px] left-[16px]  shrink-0 z-[1]"
          alt="login"
          src="/frame1.svg"
        />
      </div>
      </div>
    </nav>
  )
}

export default Navbar