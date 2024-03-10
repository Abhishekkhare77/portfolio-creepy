import RandomSpiders from "@/components/RandomSpiders";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <div className="fixed top-[15vh] left-[60vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className="fixed top-[60vh] left-[10vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className="fixed -bottom-10 right-0 pointer-events-none select-none">
        <Image src={"/treeHorror.png"} className="brightness-0" width={600} height={600} alt="spider"/>
      </div>
      <div>
        <RandomSpiders/>
      </div>
      <div className="absolute top-0 right-4 pointer-events-none">
        <Image src={"/spiderGif.gif"} width={70} height={70} alt="spider"/>
      </div>
      <div className="fixed -bottom-2 left-20 pointer-events-none">
        <Image src={"/scaryCat.gif"} width={100} height={100} alt="spider"/>
      </div>
      <div className="fixed -bottom-16 -right-16 rotate-180 pointer-events-none">
        <Image src={"/web.png"} width={230} height={230} alt="spider" className="invert brightness-200 -z-50 "/>
      </div>
      <div className="fixed top-0 left-16 pointer-events-none">
        <Image src={"/blood.png"} width={250} height={250} alt="spider" className="brightness-50"/>
      </div>
      <div>
        <h1 className="absolute bottom-5 left-20 text-[10rem] blur-sm text-red-500/10 pointer-events-none">Hello there, <br />I am Abhishek khare</h1>
      </div>
      <div className="fixed top-[50vh] text-[1.4rem] bg-gradient-to-r from-red-600 via-black-500 to-red-400 inline-block text-transparent bg-clip-text">Developer by day, digital necromancer by night.<br /> <span className="text-[3.2rem] bg-gradient-to-r from-red-600 via-red-900 to-red-600 inline-block text-transparent bg-clip-text">Welcome to my crypt.</span></div>
      
   </div>
  );
}
