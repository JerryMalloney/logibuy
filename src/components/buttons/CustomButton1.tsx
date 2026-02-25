import Link from "next/link";
import React from "react";

const CustomButton1 = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="sm:flex sm:gap-4">
      <Link
        className="rounded-full bg-brand-secondary px-5 py-2.5 text-md font-medium text-white shadow-sm"
        href={link}
      >
        {text}
      </Link>
    </div>
  );
};

export default CustomButton1;
