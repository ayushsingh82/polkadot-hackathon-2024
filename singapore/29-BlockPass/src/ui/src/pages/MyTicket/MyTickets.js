/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
// import { isWalletConnected, fetchUserTickets } from "./ticketApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo.png";
import { events } from "../../data";



const MyTickets = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  //   const [tickets, setTickets] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const registeredEvents = events.filter((event) => event.registered);

  return (
    <>
      <nav className="container flex justify-between mx-auto items-center px-8 py-4">
        {/* Logo and Brand Name */}
        <Link to="/">
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="flex items-center"
          >
            <img src={logo} alt="BlockPass Logo" className="h-8 mr-2 " />
            <span className="text-black font-semibold text-lg">
              Block<span className="text-[#F5167E]">Pass</span>{" "}
            </span>
          </motion.div>
        </Link>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-black hover:text-[#F5167E] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black/30 md:bg-transparent p-4 md:p-0 z-10`}
        >
          {["Home", "All events", "My tickets"].map((text, index) => (
            <Link
              key={index}
              to={
                text === "All events"
                  ? "/events"
                  : `/${text.toLowerCase().replace(/\s+/g, "-")}` &&
                    text === "Home"
                  ? "/"
                  : `/${text.toLowerCase().replace(/\s+/g, "-")}` &&
                    text === "My tickets"
                  ? "/my-tickets"
                  : `/${text.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="block md:inline-block text-black hover:text-[#F5167E] transition-colors duration-200 py-2 md:py-0"
            >
              {text}
            </Link>
          ))}
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            className="block md:inline-block text-white bg-purple-800 hover:bg-purple-900 px-4 py-2 rounded-full transition-colors duration-200 ring-2 ring-white ring-opacity-50 hover:ring-opacity-75"
          >
            Connect wallet
          </motion.button>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto my-10 p-8 ">
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">MY TICKETS</h2>
        <p className="mb-4 italic text-gray-700 text-sm">
          To view NFT on other networks, switch connected network
        </p>
        {walletConnected ? (
          <div className="bg-pink-100 p-4 rounded-md text-center">
            <p className="text-lg text-red-600 mb-3">Wallet not connected!</p>
            <p>You must connect to metamask to access this page.</p>
            <button
              className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              // Implement wallet connect functionality
              // onClick={/* Function to connect wallet */}
            >
              Connect
            </button>
          </div>
        ) : (
          <ul role="list" className="divide-y divide-gray-100">
            {registeredEvents.map((event) => (
              <li key={event.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    alt=""
                    src={event.imageUrl}
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {event.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {event.date}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {event.startTime} - {event.endTime}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MyTickets;
