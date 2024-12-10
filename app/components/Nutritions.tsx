import React from "react";
import Image from "next/image";
import { NutritionsProps } from "@/types";

const Nutritions: React.FC<NutritionsProps> = ({
  icon,
  nutrition,
  nutritionColor,
  value,
  valueColor,
  border,
}) => {
  return (
    <div
      className={`flex items-center w-full px-3 py-2 md:py-3 gap-x-2 md:w-96 rounded-nutritions md:px-7 ${border}`}
    >
      <Image
        src={`/${icon}`}
        width={50}
        height={50}
        alt={icon}
        className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
      />
      <div className={`flex flex-col`}>
        <h6 className={`text-sm md:text-xl ${nutritionColor}`}>{nutrition}</h6>
        <p className={`md:text-5xl text-md ${valueColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default Nutritions;
