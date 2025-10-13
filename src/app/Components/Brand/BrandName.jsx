"use client"
import Link from "next/link";


const BrandName = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <img className="w-28" src="/images/brand-name.png" alt="Roots of Intelligence" />
    </Link>
  );
};

export default BrandName;
