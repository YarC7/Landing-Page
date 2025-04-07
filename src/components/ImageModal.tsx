"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
}

export function ImageModal({
  isOpen,
  onClose,
  onSelectImage,
}: ImageModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("web");

  // Mock data for different image categories
  const images = [
    { id: 1, img: "/demo/a (1).jpeg" },
    { id: 2, img: "/demo/a (1).jpg" },
    { id: 3, img: "/demo/a (2).jpeg" },
    { id: 4, img: "/demo/a (2).jpg" },
    { id: 5, img: "/demo/a (2).png" },
    { id: 6, img: "/demo/a (3).jpeg" },
    { id: 7, img: "/demo/a (3).jpg" },
    { id: 8, img: "/demo/a (3).png" },
    { id: 9, img: "/demo/a (4).jpeg" },
    { id: 10, img: "/demo/a (4).jpg" },
    { id: 11, img: "/demo/a (5).jpeg" },
    { id: 12, img: "/demo/a (6).jpeg" },
  ];

  // Flatten all images for search
  // const allImages = imageCategories.flatMap((category) => category.images);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Filter images based on search query
  // const filteredImages = searchQuery
  //   ? allImages.filter((img) =>
  //       img.alt.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   : allImages;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[1200px] max-w-[95vw] max-h-[90vh] bg-white rounded-lg shadow-xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-medium">Chọn hình ảnh</h2>
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex h-[700px] max-h-[calc(90vh-120px)]">
          {/* Left Sidebar */}
          <div className="w-max border-r bg-gray-100 p-4 flex flex-col">
            <div>
              <label className="text-sm flex gap-1">
                <span className="">+</span>
                Tải lên phương tiện
              </label>
              <input
                className="flex items-center justify-center bg-blue-600 text-white rounded-3xl p-2 mb-4 hover:bg-blue-700"
                type="file"
                multiple
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">
                Quản lý
              </h3>
              <div className="flex flex-col space-y-1">
                <button
                  className={`text-left p-2 hover:bg-blue-100 ${
                    activeTab === "web" ? "bg-blue-100 text-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("web")}
                >
                  Tệp trang web
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">
                Khám phá
              </h3>
              <div className="flex flex-col space-y-1">
                <button
                  className={`text-left p-2 hover:bg-blue-100 rounded-lg ${
                    activeTab === "shutterstock"
                      ? "bg-blue-100 text-blue-600 rounded-lg"
                      : ""
                  }`}
                  onClick={() => setActiveTab("shutterstock")}
                >
                  Shutterstock
                </button>
                <button
                  className={`text-left p-2 hover:bg-blue-100 rounded-lg ${
                    activeTab === "unsplash"
                      ? "bg-blue-100 text-blue-600 rounded-lg"
                      : ""
                  }`}
                  onClick={() => setActiveTab("unsplash")}
                >
                  Unsplash
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Search and Filter Bar */}
            <div className="p-4 border-b flex items-center">
              <div className="relative flex-1 mr-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm theo chủ đề kinh doanh, thời trang, thể dục, v.v"
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Gallery Filter */}
            <div className="px-4 py-2 border-b">
              <h3 className="font-medium">Tệp trang web</h3>
            </div>

            {/* Image Gallery */}
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative cursor-pointer"
                  onClick={() => onSelectImage(image.img)}
                >
                  <Image
                    src={image.img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="w-full h-[160px] object-cover rounded-md border hover:border-blue-500"
                  />
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Thêm vào trang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
