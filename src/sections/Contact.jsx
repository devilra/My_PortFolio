import { motion } from "framer-motion";
import React from "react";
import { personalData } from "../constants/data";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white h-screen" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        traclassName="py-20 px-6 bg-white"
        id="contact"
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="  max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact</h2>
        <p className="text-lg text-gray-700 mb-4">Feel free to reach out!</p>
        <div className="space-y-2 text-gray-600 text-base">
          <p>
            <strong>Name:</strong> {personalData.name}
          </p>
          <p>
            <strong>Email:</strong> {personalData.email}
          </p>
          <p>
            <strong>Phone:</strong> {personalData.phone}
          </p>
          <p>
            <strong>Location:</strong> {personalData.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
