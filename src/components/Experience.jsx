import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiCalendar } from "react-icons/hi";
import { experience } from "../data/constants";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            My professional journey and key accomplishments
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 hidden sm:flex items-center justify-center z-10 shadow-glow-cyan">
                  <div className="w-2 h-2 rounded-full bg-dark-900" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-glass group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <HiBriefcase className="text-violet-400 text-sm" />
                        <span className="text-gray-400 text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 self-start">
                      <HiCalendar className="text-cyan-400 text-sm" />
                      <span className="text-gray-400 text-xs font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <motion.li
                        key={rIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + rIndex * 0.05 + 0.3,
                        }}
                        className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 mt-2 flex-shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
