import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/constants";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A selection of projects that showcase my skills and passion for building great products
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveLink}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-200"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-violet-500 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400/80 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
