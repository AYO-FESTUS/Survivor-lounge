import React from "react";
import {
  FaHandsHelping,
  FaPlusCircle,
  FaBook,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="font-poppins">
      <section className="relative bg-white">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            src="/blog imag/Premium Photo _ Business people in portrait selfie (1).jpeg"
            alt=""
            className="w-full h-[90vh] object-cover"
          />

          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl w-full px-4">
              <h1 className="text-4xl sm:text-3xl font-bold mb-4 text-blue-100 md:text-5xl">
                Strength. Healing. Hope.
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 [word-spacing:0.2em] tracking-wider">
                Empowering migrant women survivors of domestic abuse to rebuild their lives beyond crisis.
              </h2>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Get Support
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
                >
                  Partner With Us
                </a>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
