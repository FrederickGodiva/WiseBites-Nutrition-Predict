import React from "react";
import Image from "next/image";

interface ImagePreviewProps {
  image: File | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image }) => {
  return (
    <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-tertiary">
      {image ? (
        <Image
          src={URL.createObjectURL(image!)}
          alt="Uploaded Preview"
          className="object-cover w-full h-[550px]"
          width={150}
          height={80}
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
