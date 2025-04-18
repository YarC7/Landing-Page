import Link from "next/link";
import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-detail";
// import Search from "@/components/Search";
import {
  ChevronDown,
  Grid,
  Plus,
} from "lucide-react";
import { Button } from "../../components/ui/button";
export type Product = {
  id: string;
  name: string;
  status: string;
  location: string;
  images: string[];
  slug: string;
  description: string;
};

export type Image = {
  id: string;
  imageUrl: string;
  productId: string;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const product: Product[] = await getProducts(query);

  return (
    <div>
      <div className="py-6 px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Sản phẩm <span className="text-gray-400">{product.length}</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Button
              variant="outline"
              className="border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            >
              <Grid className="mr-2 h-5 w-5" />
              Thao tác khác
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className="ml-2 justify-center"
            >
              <Link className="w-max flex items-center" href={"/product-db-create"}>
                <Plus className="mr-2 h-5 w-5" />
                Sản phẩm mới
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="p-12 flex flex-row items-center justify-between">
        <Search />
      </div> */}
      <ProductDetail products={product} />
    </div>
  );
}
