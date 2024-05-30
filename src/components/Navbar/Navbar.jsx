"use client";
import Image from "next/image";
import NavItem from "./NavItem";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    title: "Ana sayfa",
    href: "#hero",
  },
  {
    id: 2,
    title: "Hakkımızda",
    href: "#about",
  },
  {
    id: 3,
    title: "İletişim",
    href: "#contact",
  },
];
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex justify-center mb-12 bg-white shadow-shadowred">
      <nav className="container flex justify-between items-center p-4">
        <Image src="/logo.svg" width={200} height={100} alt="LOGO" />

        <button className="md:hidden p-2" onClick={toggleMenu}>
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute shadow-shadowred md:shadow-none md:relative md:flex w-full md:w-auto bg-white md:bg-transparent left-0 md:left-auto top-full md:top-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavItem
                  href={link.href}
                  title={link.title}
                  isActive={activeLink === link.id}
                  onClick={() => handleNavClick(link.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
