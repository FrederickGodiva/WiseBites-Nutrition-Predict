import React from "react";
import Image from "next/image";

interface NutritionsProps {
  icon: string;
  nutrition: string;
  value: string;
  className?: string;
}

const Nutritions: React.FC<NutritionsProps> = ({
  icon,
  nutrition,
  value,
  className,
}) => {
  return (
    <div
      className={`flex items-center gap-5 py-4 border-2 w-96 rounded-nutritions px-7 ${className}`}
    >
      <Image src={`/${icon}`} width={50} height={50} alt={icon} />
      <div className="flex flex-col">
        <h6 className={`text-xl ${className}`}>{nutrition}</h6>
        <p className="text-5xl">{value}</p>
      </div>
    </div>
  );
};

export default Nutritions;
