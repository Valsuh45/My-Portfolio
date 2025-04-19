"use client";
import { useState } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RawScrollLink, LinkProps } from "react-scroll"; // ✅ Fixed import

const ScrollLink = RawScrollLink as unknown as React.FC<
  React.PropsWithChildren<LinkProps>
>;

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "contributions" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="font-signature text-5xl ml-2">Valantine Suh</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <ScrollLink to={link} smooth={true} duration={500} offset={-70}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Mobile View Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-500 py-6 text-4xl"
            >
              <ScrollLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
