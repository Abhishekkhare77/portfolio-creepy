"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Page = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission, like sending data to a server
    alert("I've got your message... See you soon.");
  };

  // Animation variants for Framer Motion
  const inputFocusAnimation = {
    focus: {
      scale: 1.02,
      transition: { yoyo: Infinity, duration: 0.2 }
    }
  };

  const buttonHoverAnimation = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <div className="fixed top-[15vh] left-[10vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className="fixed top-[60vh] left-[60vw]">
        <div className="h-[30vh] w-[20vw] bg-red-500 blur-[12rem]"></div>
      </div>
      <div className='absolute bottom-5 left-20 text-[10rem] blur-sm text-red-500/10 pointer-events-none'>I&apos;m waiting... <br /> patiently.</div>
      <div className='flex items-center justify-between'>
        <div></div>
        <div className='w-[40vw] h-[90vh] rounded-xl'>
          <div className='flex items-center justify-center mt-52'>
            <motion.div className='border w-[40vw] h-[60vh] rounded-xl p-10 bg-black bg-opacity-60 shadow-lg shadow-red-800'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <motion.input
                  className='w-full p-2 rounded bg-gray-900 text-white border-none'
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputFocusAnimation}
                />
                <motion.input
                  className='w-full p-2 rounded bg-gray-900 text-white border-none'
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputFocusAnimation}
                />
                <motion.textarea
                  className='w-full p-2 rounded bg-gray-900 text-white border-none'
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputFocusAnimation}
                />
                <motion.button
                  className='mt-4 p-2 rounded bg-red-700 text-white cursor-pointer'
                  whileHover="hover"
                  variants={buttonHoverAnimation}
                  type="submit"
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Page
