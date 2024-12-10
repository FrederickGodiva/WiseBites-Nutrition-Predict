import React from "react";
import Image from "next/image";
import Nutritions from "./Nutritions";
import { OutputProps } from "@/types";

const Output: React.FC<OutputProps> = ({ image, prediction }) => {
  const { predicted_label, nutritions } = prediction;

  const nutritionData = [
    {
      icon: "calories.svg",
      nutrition: "Calories",
      value: `${nutritions.calories} Kcal`,
    },
    {
      icon: "protein.svg",
      nutrition: "Protein",
      value: `${nutritions.protein} g`,
    },
    { icon: "fat.svg", nutrition: "Fat", value: `${nutritions.fat} g` },
    {
      icon: "carbohydrates.svg",
      nutrition: "Carbohydrates",
      value: `${nutritions.carbohydrate} g`,
    },
  ];

  return (
    <>
      <h2 className="mb-10 font-bold text-5xl md:px-12 text-secondary">
        {predicted_label}
      </h2>

      <div className="flex flex-col gap-y-5 md:grid w-full h-[450px] mb-12 md:px-12 md:grid-cols-3 md:gap-x-16 justify-items-start">
        <div className="flex flex-col items-center justify-start w-full h-full col-span-2 gap-3">
          <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-tertiary">
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                alt="Uploaded Preview"
                className="object-cover w-full h-full md:h-[550px]"
                width={0}
                height={0}
              />
            )}
          </div>
        </div>

        <div className="grid items-center w-full grid-cols-2 grid-rows-2 gap-5 md:gap-6 md:grid-rows-4 md:grid-cols-1">
          {nutritionData.map((nutrition, index) => {
            return index % 2 === 0 ? (
              <Nutritions
                key={index}
                icon={nutrition.icon}
                nutrition={nutrition.nutrition}
                nutritionColor={"text-tertiary"}
                value={nutrition.value}
                valueColor={"text-dark"}
                border={"border-2 border-black"}
              />
            ) : (
              <Nutritions
                key={index}
                icon={nutrition.icon}
                nutrition={nutrition.nutrition}
                nutritionColor={"text-white"}
                value={nutrition.value}
                valueColor={"text-white"}
                border={"border-none bg-primary"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Output;
