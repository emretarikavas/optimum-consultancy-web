import Link from "next/link";

const NavItem = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      className={`text-lg ${
        isActive
          ? "bg-myred text-white px-3 py-1 rounded-3xl hover:!text-white"
          : "text-black"
      }  hover:text-myred transition duration-300`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavItem;
