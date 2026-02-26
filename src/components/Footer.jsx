import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { personalInfo } from "../data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: HiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold gradient-text">SK</span>
            <span className="text-gray-500 text-sm ml-1">.dev</span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
                aria-label={item.label}
              >
                <item.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 flex items-center justify-center gap-1">
              Built with <FaHeart className="text-red-500 text-[10px]" /> using
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
