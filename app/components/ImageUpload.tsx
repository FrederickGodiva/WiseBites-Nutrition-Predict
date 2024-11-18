import Image from "next/image";
import React, { DragEvent, ChangeEvent, useRef } from "react";

interface ImageUploadProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ImageUpload: React.FC<ImageUploadProps> = ({ file, setFile }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const validateFile = (file: File) => {
    if (!["image/jpeg", "image/png", "image/svg+xml"].includes(file.type)) {
      alert("Unsupported file type. Please upload a jpg, png, or svg image.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 20MB. Please upload a smaller image.");
      return false;
    }
    return true;
  };

  return (
    <form className="flex flex-col w-full h-full gap-2" method="POST">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/svg+xml"
        onChange={handleFileChange}
        className="hidden"
        name="picture"
        id="file-input"
      />
      <div
        className="flex flex-col items-center justify-center w-full h-full p-6 border-2 border-dashed rounded-lg cursor-pointer border-tertiary"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        {file ? (
          <p className="text-sm text-gray-600">{file.name}</p>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/upload-image.svg"
              alt="Upload Image"
              width={150}
              height={80}
            />
            <p className="text-xl text-gray-600">
              Drag or upload your image here
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-4 mt-1 text-sm text-gray-500">
        <div className="flex items-center justify-between">
          <label
            htmlFor="file-input"
            className="mt-2 text-sm text-gray-500 cursor-pointer hover:underline"
          >
            Supported formats: jpg, jpeg, png, svg
          </label>
          <span>Maximum size: 20MB</span>
        </div>
        <button
          type="button"
          className={`text-white self-end py-3 px-9 rounded-lg shadow-md ${
            file
              ? "bg-primary hover:bg-red-600 transition"
              : "bg-tertiary cursor-not-allowed"
          }`}
          disabled={!file}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ImageUpload;
