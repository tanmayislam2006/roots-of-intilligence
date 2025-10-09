"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import BrandName from "../Brand/BrandName";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-primary p-4">
      <div className="max-w-[1580px] mx-auto flex justify-between items-center">
        <BrandName />
        <NavLink />
        <div className="flex gap-6 items-center">
          <Link
            href="/login"
            className={`bg-[#C6F0FC] font-medium px-4 py-2 rounded-3xl transition-colors  ${
              pathname === "/login" ? "text-primary" : "text-gray-700"
            }`}
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
