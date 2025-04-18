"use client";

import { FormState, editProduct } from "@/actions/product";
import { Submit } from "@/components/Submit";
import type { Product, Image } from "@/app/products/page";
import { Suspense, useActionState, useEffect, useCallback } from "react";
import { useImageUrlContext } from "../../../context/imageContext";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";

const ImageUrlInput = dynamic(() => import("@/components/ImageComponent"), {
  ssr: false,
});
import Skeleton from "@/components/Skeleton";
type ProductEditFormProps = {
  product: Product;
  images: string[]; // Replace ImageType with your actual image type
};
export default function ProductEditForm({
  product,
  images,
}: ProductEditFormProps) {
  const { setImages } = useImageUrlContext();
  const updateImages = useCallback(() => {
    if (images && images.length > 0) {
      setImages(images);
    }
  }, [images, setImages]);

  useEffect(() => {
    updateImages();
  }, [updateImages]);
  // const { images } = useImageUrlContext();
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction] = useActionState(editProductWithId, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 mx-auto bg-[#E3EFF4]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center text-gray-500">
          <div className="flex items-center">
            <Link href={"/products"}>
              <span>Sản phẩm</span>
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-400">{product.name}</span>
          </div>
        </div>
        <div className="mb-6 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-700">{product.name}</h1>
          <div className="mb-6 flex justify-end space-x-2 items-center">
            <Link
              href={"/products"}
              className="block w-max mx-auto p-2 text-white bg-red-600 rounded disabled:bg-gray-500"
            >
              <button className="cancel-button">Cancle</button>
            </Link>
            <Submit />
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Thông tin sản phẩm</h2>
          <div className="h-0.5  bg-black w-full"></div>
          <div className="mb-6 pt-2">
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
              Thông tin cơ bản
            </h3>
          </div>
          <div className="mb-4 grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Tên
                <input
                  type="text"
                  name="name"
                  placeholder="Thêm tên sản phẩm"
                  defaultValue={product.name}
                  className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </label>
              {state.errors.name && (
                <p className="text-red-500">{state.errors.name}</p>
              )}
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
              <Select name="status" defaultValue="pending">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status: </SelectLabel>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="In-Progress">In-Progress</SelectItem>
                    <SelectItem value="Complete">Complete</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <div className="col-span-3">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Địa chỉ
                <input
                  type="text"
                  name="location"
                  defaultValue={product.location}
                  placeholder="Thêm địa điểm dự án"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </label>
              {state.errors.location && (
                <p className="text-red-500">{state.errors.location}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Mô tả
            </label>
            <textarea
              className="block w-full p-2 text-black border rounded"
              name="description"
              defaultValue={product.description}
              placeholder="Thêm mô tả cho dự án: "
            />
            {state.errors.description && (
              <p className="text-red-500">{state.errors.description}</p>
            )}
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          {/* <ImageUploader /> */}
          <Suspense fallback={<Skeleton />}>
            <ImageUrlInput />
          </Suspense>
        </div>
        <input value={images} name="images" className="hidden" readOnly />
      </div>
    </form>
  );
}
