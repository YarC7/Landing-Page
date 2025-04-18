import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import React, { Suspense } from "react";

const Projects = async (props: { searchParams: Promise<any> }) => {
  const searchParams = await props.searchParams;

  return (
    <div className="px-4 md:px-4 lg:px-8 xl:px-10 2xl:px-12 relative">
      {/* PRODUCTS */}
      <div className="flex flex-col items-center">
        <h1 className="mt-12 text-xl font-semibold">All Projects is Here!</h1>
      </div>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          // categoryId={
          //   cat.collection?._id || "00000000-000000-000000-000000000001"
          // }
          // searchParams={"all-products"}
        />
      </Suspense>
    </div>
  );
};

export default Projects;
