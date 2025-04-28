import { motion } from "framer-motion";
import React from "react";
import { certificates } from "../constants/data";

const Certificate = () => {
  return (
    <section
      className="scroll-mt-20 pt-5 mb-20 lg:mb-0 px-6 lg:h-screen h-[100%] snap-start bg-white"
      id="certificates">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}>
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <span className="text-sm text-gray-500">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificate;
