import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const AnimatedMenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer p-2 rounded-full transition ${
          isOpen ? "bg-[#9fe30e]" : "hover:bg-transparent/40"
        }`}
        style={{
          width: isOpen ? "42px" : "auto", // Match width when active
          height: isOpen ? "42px" : "auto",
        }}
      >
        <motion.div
          initial={{ rotate: 0, opacity: 1 }}
          animate={{ rotate: isOpen ? 180 : 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center w-full h-full"
        >
          {isOpen ? (
            <FiX size={28} color="#0e0f09" /> // Inverted colors for better visibility
          ) : (
            <FiMenu size={28} color="#9fe30e" />
          )}
        </motion.div>
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>{isOpen && <DropDownContainerDiv />}</AnimatePresence>
    </div>
  );
};

// DropDown Component with Dynamic Height
const DropDownContainerDiv = () => {
  const menuItems = ["HOME", "ABOUT", "WORK", "SERVICES", "TESTIMONIALS", "CONTACT"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-12 right-0 bg-[#0e0f09] border border-[#9fe30e] z-[5000] flex flex-col items-center rounded-xl shadow-lg p-4 w-[34vw] max-w-[80vw]"
    >
      <div className="flex flex-col gap-3 w-full">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="dongle-regular cursor-pointer text-[#cccccc] text-[23px] hover:text-[#9fe30e] transition text-center"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedMenuIcon;
