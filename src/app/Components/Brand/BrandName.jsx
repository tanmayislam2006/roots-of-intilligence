import Link from "next/link";
import React from "react";

const BrandName = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <img src="./roots.png" alt="" />
      <span className="text-2xl font-extrabold text-primary tracking-tight">
        Roots of Intelligence
      </span>
    </Link>
  );
};

export default BrandName;
