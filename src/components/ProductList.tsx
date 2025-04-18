import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import { getProducts } from "@/prisma-db";
import { Product } from "@/app/products/page";


const ProductList = async ({
}) => {

  const productList: Product[] = await getProducts();
  return (
    <div className="mt-12 flex gap-x-14 gap-y-12 justify-center flex-wrap">
      {productList.map((product: Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
          key={product.id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.images[0].imageUrl || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.images && (
              <Image
                src={product.images[1].imageUrl || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-center">
            <span className="font-medium">{product.name}</span>
          </div>
        </Link>
      ))}
      {/* {(searchParams==="all-products") ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null} */}
    </div>
  );
};

export default ProductList;
