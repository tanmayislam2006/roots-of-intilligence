import Link from "next/link";
import React from "react";

const BrandName = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <div className="w-16 h-16 rounded-full">
            <img src="./images/roots-1.png" alt="" />
        </div>
      <span className="text-2xl font-extrabold text-white">
        Roots of Intelligence
      </span>
    </Link>
  );
};

export default BrandName;
