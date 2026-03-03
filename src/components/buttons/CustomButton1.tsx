import Link from "next/link";
import React from "react";

const CustomButton1 = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="sm:flex sm:gap-4">
      <Link
        className="rounded-full bg-[#FDCF57] px-5 py-2.5 text-md font-medium text-black shadow-sm hover:scale-105 transition-all"
        href={link}
      >
        {text}
      </Link>
    </div>
  );
};

export default CustomButton1;
