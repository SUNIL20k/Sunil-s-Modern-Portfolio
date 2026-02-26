import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiServer, HiDatabase, HiLightningBolt } from "react-icons/hi";

const highlights = [
  {
    icon: HiCode,
    title: "Frontend",
    desc: "React.js, Tailwind CSS",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: HiServer,
    title: "Backend",
    desc: "Node.js, Express.js",
    color: "from-violet-400 to-violet-600",
  },
  {
    icon: HiDatabase,
    title: "Database",
    desc: "MongoDB",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: HiLightningBolt,
    title: "Performance",
    desc: "Optimization & APIs",
    color: "from-amber-400 to-amber-600",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Building digital experiences that{" "}
              <span className="gradient-text">matter</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a passionate MERN Full Stack Developer with{" "}
                <span className="text-white font-medium">2 years</span> of
                hands-on experience in designing and building modern web
                applications. My expertise lies in crafting scalable,
                responsive, and user-friendly solutions that solve real-world
                problems.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-cyan-400">React.js</span>,{" "}
                <span className="text-cyan-400">Node.js</span>,{" "}
                <span className="text-cyan-400">Express.js</span>, and{" "}
                <span className="text-cyan-400">MongoDB</span>, with a strong
                focus on API integration, performance optimization, and clean
                architecture. I also have a solid understanding of UI/UX
                principles to ensure every interface is both beautiful and
                functional.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing
                to open-source projects, and continuously expanding my skill set
                to stay at the cutting edge of web development.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "20+", label: "Projects Done" },
                { value: "15+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-glass hover:-translate-y-1 cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="text-white text-xl" />
                </div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
