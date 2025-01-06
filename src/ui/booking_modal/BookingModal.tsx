"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import scss from "./BookingModal.module.scss";
import { FaPhone, FaRegUser } from "react-icons/fa";
import { useBookingStore } from "@/store/useBookingStore";
const BookingModal = () => {
  const { isOpen, setIsOpen } = useBookingStore();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleContact = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={scss.Booking_modal}>
      <motion.div
        className={scss.content}
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: isOpen ? 0 : "100%",
          opacity: isOpen ? 1 : 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
      >
        <div className={scss.booking_tools_box}>
          <div className={scss.name_form}>
            <div className={scss.user_icon_wrapper}>
              <FaRegUser size={30} className={scss.user_icon} />
            </div>
            <div className={scss.form_input}>
              <span>Name</span>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className={scss.phone_form}>
            <div className={scss.phone_icon_wrapper}>
              <FaPhone size={30} className={scss.phone_icon} />
            </div>
            <div className={scss.form_input}>
              <span>Phone</span>
              <input
                type="text"
                value={phone}
                placeholder="Enter your phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button className={scss.contacs_button} onClick={handleContact}>
            Сontacts
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
