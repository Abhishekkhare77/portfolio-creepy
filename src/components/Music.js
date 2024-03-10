"use client";
import { Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Music = () => {
    const [isMuted, setIsMuted] = useState(false); // Start muted to comply with browser policies
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  return (
    <div>
       <audio ref={audioRef} src="/creepy.mp3" autoPlay loop muted={isMuted} />
        <button onClick={toggleMute} className="fixed bottom-4 right-5 z-50 text-red-500/50 hover:text-red-500">
          {isMuted ? <VolumeX /> : <Image src={'/musicGif.gif'} width={30} height={30} alt='music'/>}
        </button>
    </div>
  )
}

export default Music
