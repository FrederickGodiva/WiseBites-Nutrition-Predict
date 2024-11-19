import React from "react";
import Image from "next/image";

interface Output {
  image: File | null;
}

const Output: React.FC<Output> = ({ image }) => {
  return (
    <>
      <h2 className="mb-4 text-5xl font-bold md:px-12 text-secondary">
        Food Name
      </h2>

      <div className="grid w-full h-full gap-20 mb-12 md:px-12 md:grid-cols-3 justify-items-start">
        <div className="flex flex-col items-center justify-start w-full h-full col-span-2 gap-3 ">
          <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-tertiary">
            <div className="flex flex-col items-center">
              <Image
                src={URL.createObjectURL(image!)}
                alt="Uploaded Preview"
                className="object-cover w-full max-h-full"
                width={150}
                height={80}
              />
            </div>
          </div>
        </div>

        <div className="grid items-start grid-cols-2 grid-rows-2 md:gap-6 md:grid-rows-4 md:grid-cols-1">
          <div className="flex items-center gap-2 py-4 border-2 border-black md:gap-5 md:w-96 w-fit rounded-nutritions px-7">
            <Image src="/calories.svg" width={50} height={50} alt="Calories" />
            <div className="flex flex-col">
              <h6 className="text-xl text-tertiary">Calories</h6>
              <p className="text-5xl">100 Kcal</p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-4 md:w-96 w-fit bg-primary rounded-nutritions px-7">
            <Image src="/protein.svg" width={50} height={50} alt="Protein" />
            <div className="flex flex-col text-white">
              <h6 className="text-xl">Protein</h6>
              <p className="text-5xl">100 g</p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-4 border-2 border-black md:w-96 w-fit rounded-nutritions px-7">
            <Image src="/fat.svg" width={50} height={50} alt="Fat" />
            <div className="flex flex-col">
              <h6 className="text-xl text-tertiary">Fat</h6>
              <p className="text-5xl">100 g</p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-4 md:w-96 w-fit bg-primary rounded-nutritions px-7">
            <Image
              src="/carbohydrates.svg"
              width={50}
              height={50}
              alt="Carbohydrates"
            />
            <div className="flex flex-col text-white">
              <h6 className="text-xl">Carbohydrates</h6>
              <p className="text-5xl">100 g</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
