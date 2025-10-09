"use client";
import BrandName from "./../Brand/BrandName";
import NavLink from "./NavLink";


const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary p-4">
      <div className="max-w-[1580px] mx-auto">
        <BrandName />
        {/* Navigation Links */}
        <NavLink/>
      </div>
    </nav>
  );
};

export default Navbar;
