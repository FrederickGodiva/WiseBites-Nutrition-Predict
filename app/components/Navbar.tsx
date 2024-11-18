import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center ">
      <Image src="/logo.svg" alt="Wisebites Logo" width={100} height={70} />
      <p className="pt-5 text-3xl font-bold">WiseLens</p>
    </nav>
  );
};

export default Navbar;
