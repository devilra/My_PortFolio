import { motion } from "framer-motion";
import React, { useState } from "react";
import { certificates } from "../constants/data";

const Certificate = () => {
  const [selectImage, setSelecImage] = useState(null);
  console.log(selectImage);
  return (
    <section
      className="scroll-mt-20 pt-5 mb-25 lg:mb-[290px] px-6 lg:h-screen h-[100%] snap-start bg-white"
      id="certificates">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelecImage(cert.image)}
              className=" p-5 border border-slate-100 cursor-pointer rounded-lg ">
              <h3 className="text-xl lg:text-[15px] py-2 truncate font-semibold text-gray-800">
                {cert.title}
              </h3>
              <img
                src={cert.image}
                className="w-[200px] h-[100px]"
                alt={cert.url}
              />

              <div>
                <p className="text-gray-600 my-2 bg-pink-50  text-[12px] font-bold rounded-md">
                  issuer : <span className="bg-white px-1">{cert.issuer}</span>
                </p>
                <span className="text-sm text-gray-500 block text-[13px]">
                  Year:{cert.year}
                </span>
                <a
                  href={cert.url}
                  className="text-white font-mono px-2 py-1 rounded-md bg-pink-950  text-[14px]"
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}>
                  visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {selectImage && (
        <div
          className=" fixed inset-0 bg-black bg-opacity-70 px-5  flex items-center justify-center z-50"
          onClick={() => setSelecImage(null)}>
          <div className="relative">
            <img
              src={selectImage}
              alt="certificate full"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute hidden md:block -top-5 -right-20 text-white bg-black bg-opacity-50 rounded-full px-4 text-lg font-bold hover:bg-opacity-80 py-1"
              onClick={() => setSelecImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
