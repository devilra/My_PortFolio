import React from "react";
import { motion } from "framer-motion";
import { personalData } from "../constants/data";

const About = () => {
  return (
    <section
      className="h-screen py-10 scroll-mt-24 bg-[#f7f6f6] snap-start   "
      id="about">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed-">
          {personalData.about}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
