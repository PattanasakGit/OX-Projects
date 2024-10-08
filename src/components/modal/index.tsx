import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white p-6 rounded-lg shadow-lg w-auto h-auto mx-auto flex items-center justify-center" // Updated to full width and height
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          Close
        </button>
        <div className="mt-8 w-full h-full flex items-center justify-center">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
