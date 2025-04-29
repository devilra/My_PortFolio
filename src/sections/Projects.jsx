import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "../constants/data";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className=" px-6 h-[100%] pb-20 md:mb-0 md:h-screen bg-gray-50 scroll-mt-10 pt-10 md:pt-10  min-h-screen"
      id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-blue-600 mb-14 text-center">
          Mini Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="cursor-pointer bg-white shadow-md p-5 rounded-xl border border-gray-200 transition-transform duration-300 h-full"
              onClick={() => setSelectedProject(project)}>
              <h2 className="text-xl font-bold mb-1">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>

              <div className="mt-2   w-full h-52 md:h-20 flex items-center justify-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                {Array.isArray(project.image) && project.image.length > 1 ? (
                  <div className="w-full hover:border-[4px] hover:border-purple-400">
                    {project.image.map((img, i) => (
                      <div
                        key={i}
                        className="px-2 py-2  flex w-full h-48 overflow-hidden justify-center items-center">
                        <img
                          src={img}
                          alt={`project-${i}`}
                          className="w-full h-48 object-cover  p-2"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={
                      Array.isArray(project.image)
                        ? project.image[0]
                        : project.image
                    }
                    alt="project"
                    className="w-full h-48  p-2"
                  />
                )}
              </div>

              {/* Optional "Coming Soon" label */}
              {/* {project.soon && (
                <p className="text-center text-gray-400 italic mt-2">
                  Coming Soon...
                </p>
              )} */}
            </motion.div>
          ))}
        </div>

        {/* Optional Modal View */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}>
              <motion.div
                className="bg-white rounded-xl p-6 max-w-2xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <img
                  src={
                    Array.isArray(selectedProject.image)
                      ? selectedProject.image[0]
                      : selectedProject.image
                  }
                  alt={selectedProject.title}
                  className="w-full h-64 object-contain mb-4"
                />
                <p className="text-gray-600">{selectedProject.description}</p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline font-medium">
                  View Live
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
