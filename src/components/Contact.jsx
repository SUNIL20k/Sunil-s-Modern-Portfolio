import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/constants";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "View my repos",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Let's work together
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/[0.06] transition-all duration-300 hover:-translate-x-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-colors duration-300">
                    <item.icon className="text-xl text-white" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === "name" || formData.name
                      ? "top-2 text-xs text-cyan-400"
                      : "top-4 text-sm text-gray-500"
                    }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  required
                  className="w-full pt-7 pb-3 px-4 bg-white/5 rounded-xl border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === "email" || formData.email
                      ? "top-2 text-xs text-cyan-400"
                      : "top-4 text-sm text-gray-500"
                    }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  required
                  className="w-full pt-7 pb-3 px-4 bg-white/5 rounded-xl border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === "message" || formData.message
                      ? "top-2 text-xs text-cyan-400"
                      : "top-4 text-sm text-gray-500"
                    }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  required
                  rows={5}
                  className="w-full pt-7 pb-3 px-4 bg-white/5 rounded-xl border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
