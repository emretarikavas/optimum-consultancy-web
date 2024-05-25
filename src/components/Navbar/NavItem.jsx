import Link from "next/link";

const NavItem = ({ href, title }) => {
  return (
    <Link href={href} className="text-lg ">
      {title}
    </Link>
  );
};

export default NavItem;
