"use client";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import Image from "next/image";

export function ProductForm() {
  // Add state for modal and selected image
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Add state for checkboxes
  const [displayOnline, setDisplayOnline] = useState(true);
  const [displayPOS, setDisplayPOS] = useState(true);
  const [allProducts, setAllProducts] = useState(true);

  // State for category checkboxes
  const [categories, setCategories] = useState({
    accessories: false,
    bags: false,
    boots: false,
    dresses: false,
    featured: false,
    glasses: false,
  });

  // Handler to update category checkboxes
  const handleCategoryChange = (category: keyof typeof categories) => {
    setCategories({
      ...categories,
      [category]: !categories[category],
    });
  };

  // Handle selecting an image from the modal
  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(false);
  };

  return (
    <div className="p-4">
      {/* Header & Navigation */}
      <div className="mb-4 flex items-center text-gray-500">
        <div className="flex items-center">
          <span>Sản phẩm</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-400">Sản phẩm không tên</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Sản phẩm không tên</h1>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex justify-end space-x-2">
        <button className="cancel-button">Hủy</button>
        <button className="save-button">Lưu</button>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* Image & Video Section */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Hình ảnh</h2>
            <div className="">
              {/* Image Section */}
              {selectedImage ? (
                <div>

                <div className="relative h-32 rounded-lg border border-gray-200 bg-white">
                  <Image
                    src={selectedImage}
                    alt="Selected product image"
                    fill
                    className="h-full w-full rounded-lg object-contain p-2"
                  />
                  <button
                    className="absolute right-2 top-2 rounded-full bg-white p-1 text-gray-500 shadow-md hover:bg-gray-100"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  <button
                    className="absolute bottom-2 right-2 rounded-md bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    Thay đổi
                  </button>
                </div>

                </div>
              ) : (
                <div className="flex h-32  items-center justify-center rounded-lg grid grid-cols-2 gap-4">

                <div
                  className="flex h-32 cursor-pointer items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      THÊM HÌNH ẢNH
                    </span>
                  </div>
                </div>
                <div className="flex h-32  items-center justify-center rounded-lg grid grid-cols-2 gap-4">
                  <div className="rounded-lg cursor-pointer h-14 w-full bg-blue-100 hover:bg-blue-100"><span></span></div>
                  <div className="rounded-lg cursor-pointer h-14 w-full bg-blue-100 hover:bg-blue-100"><span></span></div>
                  <div className="rounded-lg cursor-pointer h-14 w-full  bg-blue-100 hover:bg-blue-100"><span></span></div>
                  <div className="rounded-lg cursor-pointer h-14 w-full  bg-blue-100 hover:bg-blue-100"><span></span></div>
                </div>
              </div>
              )}

            </div>
          </div>

          {/* Product Information Section */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Thông tin sản phẩm</h2>

            <div className="mb-6">
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
                Thông tin cơ bản
              </h3>

              <div className="mb-4 grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Tên
                  </label>
                  <input
                    type="text"
                    placeholder="Thêm tên sản phẩm"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
                    Tình trạng
                    <span className="ml-1 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="vd: Hàng mới về"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Mô tả
                </label>
                <div className="border border-gray-300 rounded-md">
                  <textarea className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none" />
                </div>

                <div className="mt-2 flex justify-end">
                  <button className="flex items-center text-sm font-medium text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-1 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                    Tạo văn bản AI
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
                Mục thông tin bổ sung
              </h3>
              <p className="text-sm text-gray-600">
                Chia sẻ những thông tin như chính sách trả hàng và hướng dẫn
                chăm sóc với khách hàng của bạn.
              </p>
              <button className="mt-2 text-sm font-medium text-blue-600">
                + Thêm mục thông tin
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          {/* Right Sidebar */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            {/* Display Options */}
            <div className="mb-4">
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="display-online"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={displayOnline}
                  onChange={() => setDisplayOnline(!displayOnline)}
                />
                <label
                  htmlFor="display-online"
                  className="ml-2 text-sm text-gray-700"
                >
                  Hiển thị trong cửa hàng trực tuyến
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="display-pos"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={displayPOS}
                  onChange={() => setDisplayPOS(!displayPOS)}
                />
                <label
                  htmlFor="display-pos"
                  className="ml-2 text-sm text-gray-700"
                >
                  Hiển thị trong Point of Sale
                </label>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">Danh mục</h3>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="all-products"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={allProducts}
                    onChange={() => setAllProducts(!allProducts)}
                  />
                  <label
                    htmlFor="all-products"
                    className="ml-2 text-sm text-gray-700"
                  >
                    All Products
                  </label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="accessories"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.accessories}
                    onChange={() => handleCategoryChange("accessories")}
                  />
                  <label
                    htmlFor="accessories"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Accessories
                  </label>
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="bags"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.bags}
                    onChange={() => handleCategoryChange("bags")}
                  />
                  <label htmlFor="bags" className="ml-2 text-sm text-gray-700">
                    Bags & Purses
                  </label>
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="boots"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.boots}
                    onChange={() => handleCategoryChange("boots")}
                  />
                  <label htmlFor="boots" className="ml-2 text-sm text-gray-700">
                    Boots & Heels
                  </label>
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="dresses"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.dresses}
                    onChange={() => handleCategoryChange("dresses")}
                  />
                  <label
                    htmlFor="dresses"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Dresses
                  </label>
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.featured}
                    onChange={() => handleCategoryChange("featured")}
                  />
                  <label
                    htmlFor="featured"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Featured
                  </label>
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="glasses"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={categories.glasses}
                    onChange={() => handleCategoryChange("glasses")}
                  />
                  <label
                    htmlFor="glasses"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Glasses
                  </label>
                </div>
                <button className="text-sm font-medium text-blue-600">
                  + Tạo danh mục
                </button>
              </div>
            </div>

            {/* SEO Section */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">Tiếp thị và SEO</h3>
              <div className="mb-2">
                <button className="flex w-full items-center justify-between rounded border border-gray-300 p-2 text-sm text-gray-700 hover:bg-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    Tạo phiếu giảm giá
                  </div>
                </button>
              </div>
              <div>
                <button className="flex w-full items-center justify-between rounded border border-gray-300 p-2 text-sm text-gray-700 hover:bg-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Chỉnh sửa thiết lập SEO
                  </div>
                </button>
              </div>
            </div>

            {/* Advanced Section */}
            <div>
              <h3 className="mb-3 font-medium">Nâng cao</h3>
              {/* Add more advanced options if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        onSelectImage={handleSelectImage}
      />
    </div>
  );
}
