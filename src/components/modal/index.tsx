"use client";

import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { CloseCircle } from "iconsax-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return ReactDOM.createPortal(
    <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white ca p-6 rounded-3xl shadow-lg w-auto h-auto mx-auto flex items-center justify-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <CloseCircle size="32" color="#ff8a65"/>
        </button>
        <div className="mt-8 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default Modal;
