import Image from "next/image";
import NavItem from "./NavItem";

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
  return (
    <nav className="flex justify-between items-center px-16  shadow-shadowred">
      <Image src="/logo.svg" width={200} height={100} alt="LOGO" />

      <div className="hidden md:block md:w-auto">
        <ul className="flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavItem href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
