import { motion } from "framer-motion";
import React from "react";
import { personalData } from "../constants/data";

const Home = () => {
  return (
    <section
      className="h-screen flex flex-col md:flex-row gap-8 snap-start items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-50"
      id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
          Hi, I'm {personalData.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
          {personalData.role}
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
          {personalData.about.substring(0, 120)}.....
        </p>
        <a
          href="/reactjs_tutorial.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-neutral-900 font-semibold text-white px-6 py-3 rounded-md hover:bg-neutral-950 transition-all mt-5">
          Download <span className="font-bold">CV</span>
        </a>
      </motion.div>
      <motion.img
        src="/profile2.jpg"
        alt="Profile"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-72 md:h-72 object-cover  rounded-full shadow-lg order-1 md:order-2"
      />
    </section>
  );
};

export default Home;
