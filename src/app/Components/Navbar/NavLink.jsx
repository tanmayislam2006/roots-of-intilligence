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
          className={`transition-all hover:tracking-widest hover:text-primary ${
            pathname === "/"
              ? "px-4 py-2 rounded-full border-b-2 border-primary text-white "
              : "text-white"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={`transition-all hover:tracking-widest hover:text-primary ${
            pathname === "/courses"
              ? "px-4 py-2 rounded-full border-b-2 border-primary text-white "
              : "text-white"
          }`}
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className={`transition-all hover:tracking-widest hover:text-primary ${
            pathname === "/blogs"
              ? "px-4 py-2 rounded-full border-b-2 border-primary text-white "
              : "text-white"
          }`}
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`transition-all hover:tracking-widest hover:text-primary ${
            pathname === "/about"
              ? "px-4 py-2 rounded-full border-b-2 border-primary text-white "
              : "text-white"
          }`}
        >
          About US
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={`transition-all hover:tracking-widest hover:text-primary ${
            pathname === "/contact"
              ? "px-4 py-2 rounded-full border-b-2 border-primary text-white "
              : "text-white"
          }`}
        >
          Contact US
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
