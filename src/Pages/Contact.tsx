"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import contact4 from "../assets/contact4.png";
import contact5 from "../assets/contact5.png";

export default function AssistYou() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const services = [
    {
      img: contact1,
      label: "Inquiries",
    },
    {
      img: contact4,
      label: "Repairs",
    },
    {
      img: contact2,
      label: "Jewelry Cleaning",
    },
    {
      img: contact5,
      label: "Custom Creations",
    },
    {
      img: contact3,
      label: "Customer Support",
    },
  ];

  return (
    <div className="bg-[#fbfbfa] text-gray-800 font-serif px-6 md:px-40 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="text-3xl md:text-5xl font-medium mb-2"
        >
          Here To Assist You, Always.
        </h1>
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base py-8"
        >
          Whatever you need, we are just a call away. Our team is dedicated to
          offering exceptional service tailored to you.
        </p>
      </div>

      {/* Services Icons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 justify-items-center mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="p-6 flex items-center justify-center w-40 h-40">
              <img
                src={service.img}
                alt={service.label}
                width={110}
                height={110}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-sm md:text-base font-light"
            >
              {service.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact and Form Section */}
      <div className="bg-[#fbfbfa] grid md:grid-cols-2 gap-12 items-start py-20 px-10">
        {/* Contact Info */}
        <div>
          <h2
            style={{ fontFamily: "Baskervville, sans-serif" }}
            className="text-6xl font-semibold mb-6"
          >
            Contact Us
          </h2>
          <ul
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="space-y-5 text-gray-700 p-5"
          >
            <li className="flex items-center space-x-3">
              <FaPhoneAlt /> <span>+94 112 589 090</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt /> <span>+94 727 800 010</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope /> <span>info@zamgems.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaGlobe /> <span>www.zamgems.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt />{" "}
              <span>81 Galle Rd, Colombo 00400, Sri Lanka.</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-gray-400 p-10 shadow-sm bg-white "
        >
          <h2
            style={{ fontFamily: "Baskervville, sans-serif" }}
            className="text-5xl text-center font-semibold mb-6"
          >
            Send A Message
          </h2>

          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="flex flex-col"
          >
            <label className="text-md font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border border-gray-400 px-3 py-2 focus:outline-none mb-2"
            />

            <label className="text-md font-medium mt-3" htmlFor="mobile">
              Mobile
            </label>
            <input
              id="mobile"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="border border-gray-400 px-3 py-2 focus:outline-none mb-2"
            />

            <label className="text-md font-medium mt-3" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-gray-400 px-3 py-2 focus:outline-none mb-2"
            />

            <label className="text-md font-medium mt-3" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message"
              rows={4}
              className="border border-gray-400 px-3 py-2 focus:outline-none mb-4"
            />

            <button
              type="submit"
              className="px-4 py-3 bg-[#2e291a] hover:bg-[#4f4a3b] hover:text-white text-[#e0d9c6] transition-all duration-300 cursor-pointer"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

      {/* Customer Service Section */}
      <div>
        <h2
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="text-5xl font-semibold mb-4"
        >
          Customer Service
        </h2>

        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-gray-700 text-md mt-10 md:text-base leading-relaxed mb-3"
        >
          At Zam Gems, customer service and quality control are at the
          cornerstone of our business model.<br /> Our factory and sourcing activities
          run through rigid quality control measures to ensure that only the
          finest gemstones and jewelry make it to the consumer.<br /> All of our
          gemstones and jewelry are tested and checked by experienced,
          GIA-qualified gemologists, with each piece carrying a certificate of
          authenticity and<br />warranty, allowing our customers to purchase with
          confidence.<br /> Our sales staff are rigorously trained in various fields
          such as gemology, jewelry production, and foreign languages, and in
          upholding high professional<br /> standards to confidently guide customers
          through the purchasing process and deliver the best  To guarantee the best customer service
          experience for our guests, our dedicated Zam Gems Guest Relations team
          is quick and easy to reach, and is happy to assist with any inquiries,
          comments, and suggestions, as well as with after-sales service.
        </p>
      </div>
    </div>
  );
}
