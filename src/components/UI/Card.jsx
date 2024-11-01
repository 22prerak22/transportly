// src/components/UI/Card.jsx

import React from "react";
import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className={`p-4 bg-white border border-gray-300 rounded-lg shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
