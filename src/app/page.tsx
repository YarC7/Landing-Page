import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import Footer from "@/components/Footer";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      {/* <div className="my-24 px-4 md:px-2 lg:px-4 xl:px-8 2xl:px-16">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl ">Feature Projects</h1>
        </div>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={3}
            searchParams={""}
          />
        </Suspense>
      </div> */}
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
