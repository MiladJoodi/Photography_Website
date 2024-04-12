"use client";
import Link from "next/link";

// import Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/portfolio", name: "portfolio" },
  { path: "/pricing", name: "pricing" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  // console.log(path)

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            ></motion.span>
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
