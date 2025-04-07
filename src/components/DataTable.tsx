"use client";
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
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-select";
import { Input } from "postcss";
import Form from "next/form";
const data = [
  {
    id: 1,
    name: "Sunset Villa",
    location: "123 Palm Street, Los Angeles, CA",
    status: "in_progress",
    description: "Started: 2022-01-15",
  },
  {
    id: 2,
    name: "Crescent Tower",
    location: "88 Moonlight Ave, San Diego, CA",
    status: "in_progress",
    description: "Started: 2021-11-03",
  },
  {
    id: 3,
    name: "Maple Residence",
    location: "45 Maple Road, Portland, OR",
    status: "planned",
    description: "Expected Start: 2024-05-22",
  },
  {
    id: 4,
    name: "Zenith Plaza",
    location: "10 Central Blvd, New York, NY",
    status: "completed",
    description: "Completed: 2020-12-01",
  },
  {
    id: 5,
    name: "Aurora Heights",
    location: "27 Sunrise Lane, Austin, TX",
    status: "in_progress",
    description: "Started: 2022-07-10",
  },
  {
    id: 6,
    name: "Lakeside House",
    location: "99 Lakeview Dr, Seattle, WA",
    status: "completed",
    description: "Completed: 2021-03-08",
  },
  {
    id: 7,
    name: "The Grove",
    location: "78 Forest Hill, Denver, CO",
    status: "in_progress",
    description: "Started: 2021-09-19",
  },
  {
    id: 8,
    name: "Nova Complex",
    location: "200 Galaxy St, San Francisco, CA",
    status: "planned",
    description: "Expected Start: 2024-10-01",
  },
  {
    id: 9,
    name: "Hilltop Retreat",
    location: "55 Highland Rd, Boulder, CO",
    status: "in_progress",
    description: "Started: 2022-02-28",
  },
  {
    id: 10,
    name: "Skyline Office",
    location: "300 Skyline Ave, Chicago, IL",
    status: "in_progress",
    description: "Started: 2021-06-12",
  },
];

type Product = {
  id: string;
  name: string;
  location: string;
  status: string;
  description: string;
};
const removeProductById = async (productId: string) => {};
export function DataTable({
  data,
  onRemoveProduct,
}: {
  data: Product[];
  onRemoveProduct: (productId: string) => void;
}) {
  return (
    <div className="container p-4 space-y-4 mx-auto">
      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="flex items-center"></div>
          <div className="flex items-center gap-3">
            <Form action="/products" className="relative">
              <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Search className="h-4 w-4 text-gray-500" />
              </button>
              <input
                type="text"
                name="query"
                placeholder="Tìm kiếm..."
                className="h-8 rounded-md border border-gray-300 pl-8 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Form>
            <Button
              variant="ghost"
              className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="mr-2 h-4 w-4" />
              Lọc
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <th className="px-4 py-3 text-sm font-medium">
                  <div className="flex items-center">
                    Tên
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-sm font-medium">Tình trạng</th>
                <th className="px-4 py-3 text-sm font-medium">Location</th>
                <th className="px-4 py-3 text-sm font-medium">Description</th>
                <th className="px-4 py-3 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {product.status}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {product.location}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {product.description || "—"}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="h-8 w-8 rounded-full p-0">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button>
                            <MoreHorizontal className="h-5 w-5 text-gray-500" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-max text-sm flex">
                          <Form action={onRemoveProduct.bind(null, product.id)}>
                            <button
                              type="submit"
                              className="text-black flex px-2 gap-2 items-center"
                            >
                              <Trash></Trash>
                              <span>Delete</span>
                            </button>
                          </Form>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
