import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { personalInfo } from "../data/constants";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import Button from "../ui-components/button";
import GradientText from "../ui-components/gradient-text";
import Antigravity from "../ui-components/antigravity";

const Hero = () => {
  const heroRef = useRef(null);
  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full" /> */}

      {/* <div className="absolute inset-0 bg-hero-gradient" /> */}
      <div className="absolute top-10 left-0 w-44 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full" />

      {/* Antigravity Animation */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Antigravity
          eventSource={heroRef}
          count={300}
          magnetRadius={5}
          ringRadius={10}
          particleSize={0.6}
          color="#f9feff"
          autoAnimate={true}
          particleShape="sphere"
          waveSpeed={0.4}
          lerpSpeed={0.05}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            {/* <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text text-glow">{personalInfo.name}</span>
        </motion.h1> */}
        <GradientText
          // colors={["#5227FF","#FF9FFC","#B19EEF"]}
          colors={["#5227FF", "#FF9FFC", "#06b6d4", "#8b5cf6", "#ec4899"]}
          animationSpeed={6}
          showBorder={false}
          className="custom-class"
        >
          {personalInfo.name}
        </GradientText>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          // variants={fadeInUp} 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="text-lg md:text-xl text-white/30 font-mono">{'< '}</span>
          <TypeAnimation
            sequence={personalInfo.typingSequences}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-mono gradient-text font-semibold"
          />
          <span className="text-lg md:text-xl text-white/30 font-mono">{' />'}</span>
        </motion.div>
        {/* onHover Options: slowDown, speedUp, pause, goBonkers */}
        {/* <div className="fixed bottom-8 right-8 z-40 hidden sm:block">
          <CircularText
            text="SUNIL*KUMAR*MERN*DEV*"
            onHover="slowDown"
            spinDuration={16}
          />
        </div> */}

        {/* CTA Buttons */}
        <motion.div
          // variants={fadeInUp} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="glow" href="#projects" icon={HiOutlineSparkles}>
            View Projects
          </Button>
          <Button variant="secondary" href="/Sunil Kumar's Resume.pdf" icon={FaDownload}>
            Download Resume
          </Button>
          <Button variant="secondary" href="#contact" icon={FaArrowRight}>
            Hire Me
          </Button>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <HiArrowDown size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
