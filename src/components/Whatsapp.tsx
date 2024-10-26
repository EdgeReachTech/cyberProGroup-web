'use client'
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="fixed bottom-20 right-4 bg-green-500  text-white p-3  rounded-full shadow-lg hover:bg-green-600 transition ">
      <a
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        href="https://wa.me/+15144524048"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 transition duration-100 "
      >
        <FaWhatsapp size={30} />
        <p className={`${isOpen ? "block" : "hidden"}`}>Get in Touch with Us</p>
      </a>
    </div>
  );
};

export default WhatsAppButton;
