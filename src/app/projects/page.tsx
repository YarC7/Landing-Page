import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import React, { Suspense } from "react";
import { wixClientServer } from "@/lib/wixClientServer";

const Projects = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-32 relative">
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">All Projects is Here!</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default Projects;
