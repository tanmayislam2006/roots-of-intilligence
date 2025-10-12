"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import BrandName from "../Brand/BrandName";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071028]/95 backdrop-blur-sm border-b border-[#1a2440] shadow-lg px-4 py-2">
      <div className="max-w-[1580px] mx-auto flex justify-between items-center">
        <BrandName />
        <NavLink />
        <div className="flex gap-6 items-center">
          <Link
            href="/login"
            className="bg-gradient-to-r from-[#9810FA] to-[#E60076] text-lg flex items-center gap-3 px-4 py-2 rounded-2xl font-semibold text-white  "
          >
            Login
          </Link>
          {/* register */}
          <Link
            href="/register"
            className={`transition-colors hover:text-primary ${
              pathname === "/register" ? "text-primary" : "text-white"
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
