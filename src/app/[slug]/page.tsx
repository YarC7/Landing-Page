import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImage";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-8 2xl:px-16 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-2/3 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500">{product.description}</p>
      </div>
    </div>
  );
};

export default SinglePage;
