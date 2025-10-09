
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
                        pathname === "/" ? "text-primary" : "text-white"
                    }`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/courses"
                    className={`font-semibold transition-colors hover:text-primary ${
                        pathname === "/menu" ? "text-primary" : "text-white"
                    }`}
                >
                   Courses
                </Link>
            </li>
            <li>
                <Link
                    href="/blogs"
                    className={`font-semibold transition-colors hover:text-primary ${
                        pathname === "/about" ? "text-primary" : "text-white"
                    }`}
                >
                    Blogs
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={`font-semibold transition-colors hover:text-primary ${
                        pathname === "/about" ? "text-primary" : "text-white"
                    }`}
                >
                    About US
                </Link>
            </li>
            <li>
                <Link
                    href="/contact"
                    className={`font-semibold transition-colors hover:text-primary ${
                        pathname === "/about" ? "text-primary" : "text-white"
                    }`}
                >
                    Contact US
                </Link>
            </li>
        </ul>
    );
};

export default NavLink;