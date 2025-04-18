"use client";

import { useOptimistic } from "react";
import { removeProduct } from "@/actions/product";
import Link from "next/link";
import Form from "next/form";
import {
  ChevronDown,
  Grid,
  Plus,
  Filter,
  MoreHorizontal,
  Search,
  DeleteIcon,
  Trash,
} from "lucide-react";
import { Button } from "../../components/ui/button";

import { DataTable } from "@/components/DataTable";
export type Product = {
  id: string;
  name: string;
  status: string;
  location: string;
  images: string[];
  description: string;
  slug: string;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: string) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <div>
      <DataTable
        data={optimisticProducts}
        onRemoveProduct={removeProductById}
      ></DataTable>
    </div>
  );
};
