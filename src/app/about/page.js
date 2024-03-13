"use client";
import { TextGenerateEffect } from '@/components/ui/text-generation-effect'
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Mouse } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';

const Page = () => {

  const [showScroll, setShowScroll] = useState(false);
  setTimeout(() => {
    setShowScroll(true);
  }, [12000])

  const words = " In the shadowy corridors of Bhilai Institute of Technology, I, a final-year disciple of computer science, conjure web realms both eerie and dynamic. A maestro of chess and the Rubik's cube, I wield my dark arts of problem-solving to birth creations that bewitch the digital scape. Keen to collaborate on sinister projects, I continually seek forbidden knowledge in the ever-evolving development necromancy."
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
          <TextGenerateEffect words={words} className={'pointer-events-none'} />
        </div>
        <div className='border-[5px] border-red-900/50 rounded-xl backdrop-blur-lg pt-5'>
          <Image src={"/bgremovedProfile.png"} height={500} width={500} alt='profile' className='brightness-75' />
        </div>
      </div>
      {showScroll && <div className='absolute bottom-5 left-20 flex gap-x-2'><Mouse size={24} className='text-red-500/30' /><span className='text-red-500/30'>Scroll if you want to...</span></div>}

      <div className='mt-36 mb-36'>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={"text-xl mb-4"}>
                  {item.title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  )
}

export default Page


const dummyContent = [
  {
    title: "Shakuntala Vidyalaya",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "School",
    image:
      "/shakuntala.jpg",
  },
  {
    title: "Bhilai Institute of Technology",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "College",
    image:
      "/bitraipur.jpeg",
  },
];
