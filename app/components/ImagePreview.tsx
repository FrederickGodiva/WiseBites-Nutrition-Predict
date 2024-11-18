import React from "react";
import Image from "next/image";

interface ImagePreviewProps {
  file: File | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ file }) => {
  return (
    <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-tertiary">
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Uploaded Preview"
          className="object-fill"
        />
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src="/sample-image.svg"
            alt="Sample Image"
            width={150}
            height={80}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
