"use client";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import Output from "./Output";
import predictFood from "@/app/api/flaskClient";

interface Nutrition {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbohydrate: number;
  protein: number;
}

interface Prediction {
  predicted_label: string;
  nutritions: Nutrition;
}

const Analyze: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  const handleSend = async () => {
    if (file) {
      setImage(file);

      try {
        const predictedLabel = await predictFood(file);
        setPrediction(predictedLabel as Prediction);
        setShowResult(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col md:gap-32 gap-16 mb-24">
      <div className="grid w-full h-full gap-10 md:gap-20 mb-4 md:px-12 md:grid-cols-2 align-items-center">
        <div className="flex flex-col justify-start gap-1 md:gap-3">
          <h2 className="text-3xl font-bold md:text-5xl text-secondary">
            Upload a photo of your delicious meal...
          </h2>
          <p className="mt-2 mb-6 text-lg md:text-2xl text-secondary">
            We&apos;ll provide the food name and nutritions facts!
          </p>
          <ImageUpload file={file} setFile={setFile} onSend={handleSend} />
        </div>
        <ImagePreview image={file} />
      </div>
      <div>
        {showResult && prediction && (
          <Output image={image} prediction={prediction} />
        )}
      </div>
    </div>
  );
};

export default Analyze;
