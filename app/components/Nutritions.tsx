import React from "react";
import Image from "next/image";

interface nutritions {
  icon: string;
  nutrition: string;
  value: string;
}

const Nutritions: React.FC<nutritions> = ({ icon, nutrition, value }) => {
  return (
    <div className="flex items-center gap-5 py-4 border-2 border-black w-96 rounded-nutritions px-7">
      <Image src={`/${icon}`} width={50} height={50} alt={icon} />
      <div className="flex flex-col">
        <h6 className="text-xl text-tertiary">{nutrition}</h6>
        <p className="text-5xl">{value}</p>
      </div>
    </div>
  );
};

export default Nutritions;
