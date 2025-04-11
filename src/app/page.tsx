import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import Footer from "@/components/Footer";

const HomePage = async () => {
  return (
    <div className="">
      <Suspense fallback={<Skeleton />}>
        <Slider />
      </Suspense>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
