"use client";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="grid w-full h-full grid-cols-2 gap-20 px-12 align-items-center">
      <div className="flex flex-col justify-start gap-3 ">
        <h2 className="text-5xl font-bold text-secondary">
          Upload a photo of your delicious <br /> meal...
        </h2>
        <p className="mt-2 mb-6 text-2xl text-secondary">
          We&apos;ll provide the food name and nutritions facts!
        </p>
        <ImageUpload file={file} setFile={setFile} />
      </div>
      <div className="">
        <ImagePreview file={file} />
      </div>
    </div>
  );
};

export default Upload;
