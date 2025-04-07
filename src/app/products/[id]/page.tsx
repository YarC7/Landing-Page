import { getProduct, getImages } from "@/prisma-db";
import ProductEditForm from "./product-edit-form";
import type { Product, Image } from "@/app/products/page";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product = await getProduct(id);
  const imageList: Image[] = await getImages(id);
  const images = imageList.map((img) => {
    return img.imageUrl
  });
  if (!product) {
    notFound(); // Handle the case where the product is not found
    return; // Return early to avoid further processing
  }

  return <ProductEditForm product={product} images={images} />;
}
