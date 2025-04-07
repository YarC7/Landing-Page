import Image from "next/image";
import React, { useState, useRef } from "react";
import { useImageContext } from "../context/imageContext";
import { storage } from "../lib/firebase";
const ImageUploader: React.FC = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { setSelectedFiles } = useImageContext();
  const [fileInfoText, setFileInfoText] = useState<string>("No files selected");
  const [isUploadDisabled, setIsUploadDisabled] = useState<boolean>(true);
  const [imagePreviews, setImagePreviews] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    if (!input.files || input.files.length === 0) {
      setFileInfoText("No files selected");
      setIsUploadDisabled(true);
      setSelectedFiles([]);
      setImagePreviews([]);
      return;
    }

    const files = Array.from(input.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setSelectedFiles(files);
    updateFileInfo(files.length);
    setIsUploadDisabled(files.length === 0);
    setImagePreviews(files);
  };

  const updateFileInfo = (count: number) => {
    if (count === 0) {
      setFileInfoText("No files selected");
    } else {
      setFileInfoText(`${count} ${count === 1 ? "file" : "files"} selected`);
    }
  };

  const removeImage = (indexToRemove: number) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, index) => index !== indexToRemove)
    );
    updateFileInfo(imagePreviews.length - 1);
    setIsUploadDisabled(imagePreviews.length - 1 === 0);
  };

  return (
    <div className="container my-5 mx-auto bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center m-2 py-2">
        <h2 className="text-lg font-medium bg-transparent">Hình ảnh</h2>
        <div className="file-info   rounded text-gray-700">
          {fileInfoText}
        </div>
      </div>
      <div className="upload-container bg-gray-100 rounded-md p-6 mb-8">
        <div className="file-input-container mb-4 flex">
          <label
            htmlFor="image-input"
            className="inline-block px-6 py-3 bg-zinc-600 text-white rounded-md cursor-pointer font-semibold transition duration-300 hover:bg-slate-800"
          >
            Select Images
          </label>
          <input
            ref={imageInputRef}
            type="file"
            id="image-input"
            className="hidden"
            multiple
            onChange={handleFileSelect}
            accept="image/*"
          />
        </div>
      </div>

      {imagePreviews.length > 0 && (
        <div className="preview-container mt-8">
          <h2 className="text-xl text-gray-700 font-semibold mb-4 text-center">
            Image Previews
          </h2>
          <div className="image-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagePreviews.map((file, index) => (
              <div
                key={index}
                className="image-preview relative h-48 rounded-md overflow-hidden shadow-md"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  fill
                  className="w-full h-full object-cover"
                />
                <button
                  className="remove-btn absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-red-600 transition duration-200"
                  onClick={() => removeImage(index)}
                >
                  &times;
                </button>
                <div className="file-name absolute bottom-0 left-0 right-0 py-2 px-3 bg-gray-900 bg-opacity-60 text-white text-xs truncate">
                  {file.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
