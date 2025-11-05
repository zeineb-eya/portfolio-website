import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { LinkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="bg-light-surface dark:bg-[#121212] border-t border-light-border dark:border-[#33353F]">
      <ul className="flex flex-col py-4 items-center gap-2">
        {links.map((link, index) => (
          <li key={index} onClick={onClose}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
        <li className="mt-4">
          <Link
            href="https://linktr.ee/zeineb_eya_rahmani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 text-white font-medium hover:shadow-lg transition-all duration-300"
            onClick={onClose}
          >
            <LinkIcon className="h-4 w-4" />
            <span>Linktree</span>
          </Link>
        </li>
        <li className="mt-4">
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
