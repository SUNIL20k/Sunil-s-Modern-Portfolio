import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/constants";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/50 to-transparent" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <h3 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                {category.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.15 + index * 0.08,
                    }}
                    className="group glass rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-glass hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <skill.icon
                          className="text-xl"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">
                          {skill.name}
                        </h4>
                        <span className="text-gray-500 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.15 + index * 0.08 + 0.3,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
