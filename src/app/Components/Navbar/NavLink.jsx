"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = () => {
    const pathname = usePathname();
  return (
    <ul className="flex gap-8 items-center">
      <li>
        <Link
          href="/"
          className={`font-semibold transition-colors hover:text-primary ${
            pathname === "/" ? "text-primary" : "text-gray-700"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/menu"
          className={`font-semibold transition-colors hover:text-primary ${
            pathname === "/menu" ? "text-primary" : "text-gray-700"
          }`}
        >
          All Menu
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`font-semibold transition-colors hover:text-primary ${
            pathname === "/about" ? "text-primary" : "text-gray-700"
          }`}
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
