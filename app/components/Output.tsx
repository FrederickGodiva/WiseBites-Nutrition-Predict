import React from "react";
import Image from "next/image";
import Nutritions from "./Nutritions";

interface Nutrition {
  calories: number;
  fat: number;
  carbohydrate: number;
  protein: number;
}

interface Prediction {
  predicted_label: string;
  nutritions: Nutrition;
}

interface OutputProps {
  image: File | null;
  prediction: Prediction;
}

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

        <div className="flex flex-col gap-6">
          {nutritionData.map((item, index) => (
            <Nutritions
              key={index}
              icon={item.icon}
              nutrition={item.nutrition}
              value={item.value}
              className={
                index % 2 !== 0
                  ? "bg-primary text-white border-none"
                  : "border-black"
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Output;
