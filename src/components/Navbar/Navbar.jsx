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

  const handleNavClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="sticky top-0 z-10 flex justify-center mb-12 bg-white shadow-shadowred">
      <div className="container flex justify-between items-center">
        <Image src="/logo.svg" width={200} height={100} alt="LOGO" />

        <div className="hidden md:block md:w-auto">
          <ul className="flex gap-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
