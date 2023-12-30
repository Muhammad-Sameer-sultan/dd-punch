import About from "@/components/About";
import Check from "@/components/Check";
import Hero from "@/components/Hero";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
  <>
  <Hero />
  <About />
  <Services showbg="false" />
  <Pricing />
  
  {/* <Check/> */}
  {/* <Porfolio /> */}
  </>
  )
}
