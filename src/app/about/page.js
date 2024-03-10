"use client";
import { TextGenerateEffect } from '@/components/ui/text-generation-effect'
import { Mouse } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

  const [showScroll, setShowScroll] = useState(false);
  setTimeout(() => {
    setShowScroll(true);
  },[12000])

  const words =" In the shadowy corridors of Bhilai Institute of Technology, I, a final-year disciple of computer science, conjure web realms both eerie and dynamic. A maestro of chess and the Rubik's cube, I wield my dark arts of problem-solving to birth creations that bewitch the digital scape. Keen to collaborate on sinister projects, I continually seek forbidden knowledge in the ever-evolving development necromancy."
  return (
    <div>
      <div className="fixed top-[15vh] left-[10vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className="fixed top-[60vh] left-[60vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className='absolute bottom-5 left-20 text-[10rem] blur-sm text-red-500/10 pointer-events-none'>know About me?</div>
      <div className='flex items-center justify-center gap-x-40'>
        <div className='w-1/2 '>
          <TextGenerateEffect words={words} className={'pointer-events-none'}/>
        </div>
        <div className='border-[5px] border-red-900/50 rounded-xl backdrop-blur-lg pt-5'>
          <Image src={"/bgremovedProfile.png"} height={500} width={500} alt='profile' className='brightness-75'/>
        </div>
      </div>
        {showScroll && <div className='absolute bottom-5 left-20 flex gap-x-2'><Mouse size={24} className='text-red-500/30'/><span className='text-red-500/30'>Scroll if you want to...</span></div>}

        <div>
          
        </div>
    </div>
  )
}

export default Page
