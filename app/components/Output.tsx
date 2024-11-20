import React from "react";
import Image from "next/image";

interface Output {
  image: File | null;
}

const Output: React.FC<Output> = ({ image }) => {
  return (
    <>
      <h2 className="mb-10 font-bold text-7xl md:px-12 text-secondary">
        Food Name
      </h2>

      <div className="flex flex-col gap-y-5 md:grid w-full h-[450px] mb-12 md:px-12 md:grid-cols-3 md:gap-x-16 justify-items-start">
        <div className="flex flex-col items-center justify-start w-full h-full col-span-2 gap-3 ">
          <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-tertiary">
            <Image
              src={URL.createObjectURL(image!)}
              alt="Uploaded Preview"
              className="object-cover w-full h-full md:h-[550px]"
              width={0}
              height={0}
            />
          </div>
        </div>

        <div className="grid items-center w-full grid-cols-2 grid-rows-2 gap-5 md:gap-6 md:grid-rows-4 md:grid-cols-1">
          <div className="flex items-center w-full px-3 border-2 border-black md:py-3 gap-x-2 md:gap-5 md:w-96 rounded-nutritions md:px-7">
            <Image
              src="/calories.svg"
              width={0}
              height={0}
              alt="Calories"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col">
              <h6 className="text-sm md:text-xl text-tertiary">Calories</h6>
              <p className="md:text-5xl text-md">100 Kcal</p>
            </div>
          </div>

          <div className="flex items-center w-full px-3 md:py-3 gap-x-2 md:w-96 bg-primary rounded-nutritions md:px-7">
            <Image
              src="/protein.svg"
              width={0}
              height={0}
              alt="Protein"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col text-white">
              <h6 className="text-sm md:text-xl">Protein</h6>
              <p className="md:text-5xl text-md">100 g</p>
            </div>
          </div>

          <div className="flex items-center w-full px-3 border-2 border-black md:py-3 gap-x-2 md:gap-5 md:w-96 rounded-nutritions md:px-7">
            <Image
              src="/fat.svg"
              width={0}
              height={0}
              alt="Fat"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col">
              <h6 className="text-sm md:text-xl text-tertiary">Fat</h6>
              <p className="md:text-5xl text-md">100 g</p>
            </div>
          </div>

          <div className="flex items-center w-full px-3 md:py-3 gap-x-2 md:w-96 bg-primary rounded-nutritions md:px-7">
            <Image
              src="/carbohydrates.svg"
              width={0}
              height={0}
              alt="Carbohydrates"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col text-white">
              <h6 className="text-sm md:text-xl">Carbohydrates</h6>
              <p className="md:text-5xl text-md">100 g</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
