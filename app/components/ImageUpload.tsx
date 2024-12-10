import React, { DragEvent, ChangeEvent, useRef } from "react";
import Image from "next/image";
import { ImageUploadProps } from "@/types";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const ImageUpload: React.FC<ImageUploadProps> = ({ file, setFile, onSend }) => {
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
    <div className="flex flex-col w-full h-full ">
      <form className="flex flex-col min-w-full min-h-full gap-2" method="POST">
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
            <p className="text-sm text-gray-500">{file.name}</p>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/upload-image.svg"
                alt="Upload Image"
                width={150}
                height={80}
              />
              <p className="text-sm text-gray-500 md:text-xl">
                Drag or upload your image here
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-2 mt-1 text-sm text-gray-500 md:gap-4">
          <div className="flex flex-wrap items-center justify-between">
            <label
              htmlFor="file-input"
              className="text-xs text-gray-500 cursor-pointer md:text-sm hover:underline"
            >
              Supported formats: jpg, jpeg, png, svg
            </label>
            <p className="text-gray-500 test-xs md:text-sm">
              Maximum size: 20MB
            </p>
          </div>
          <button
            type="button"
            className={`text-white self-end py-3 px-9 rounded-lg shadow-md ${
              file
                ? "bg-primary hover:bg-red-600 transition"
                : "bg-tertiary cursor-not-allowed"
            }`}
            disabled={!file}
            onClick={onSend}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
