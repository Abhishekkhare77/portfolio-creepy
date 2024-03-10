"use client";
import React, { useEffect, useState } from 'react';
import { FaSpider } from "react-icons/fa";
import { motion } from 'framer-motion';

const RandomSpiders = () => {
  const [spiders, setSpiders] = useState([]);

  // Generate spiders with random initial positions and destinations
  useEffect(() => {
    const createSpiders = () => {
      const spiderCount = Math.floor(Math.random() * 15) + 10; // Generate between 10 to 15 spiders
      const spiderArray = [];

      for (let i = 0; i < spiderCount; i++) {
        const xStart = Math.random() * window.innerWidth;
        const yStart = Math.random() * window.innerHeight;
        const xEnd = Math.random() * window.innerWidth;
        const yEnd = Math.random() * window.innerHeight;

        spiderArray.push({
          id: i,
          initial: { x: xStart, y: yStart },
          animate: { x: xEnd, y: yEnd },
        });
      }

      setSpiders(spiderArray);
    };

    createSpiders();
    // Recreate spiders every 10 seconds to simulate continuous roaming
    const intervalId = setInterval(createSpiders, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {spiders.map((spider) => (
        <motion.div
          key={spider.id}
          initial={{ x: spider.initial.x, y: spider.initial.y, scale: 0.5 }}
          animate={{ x: spider.animate.x, y: spider.animate.y, scale: [0.5, 1.0, 0.5,0.3,1.0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          style={{ position: "fixed", zIndex: 100 }}
        >
          <FaSpider className='text-black -z-10' size={24} />
        </motion.div>
      ))}
    </div>
  );
}

export default RandomSpiders;