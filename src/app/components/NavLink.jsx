import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-light-text-secondary dark:text-[#ADB7BE] sm:text-base font-medium rounded md:p-0 hover:text-light-pink-600 dark:hover:text-white transition-colors duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;
