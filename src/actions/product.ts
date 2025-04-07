"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  name?: string;
  location?: string;
  description?: string;
  status?: string;
  images?: string[];
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const images = formData.getAll("images") as string[];
  const errors: Errors = {};

  if (!name) errors.name = "Name is required";
  if (!description) errors.description = "Description is required";
  if (!location) errors.location = "Location is required";
  if (!status) errors.status = "Status is required";
  if (!images || images.length === 0)
    errors.images = ["At least one image URL is required"];

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(name, description, location, status, images);
  redirect("/products");
}


export async function editProduct(
  id: string,
  prevState: FormState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const images = formData.getAll("images") as string[];
  console.log("Send data: ",images);

  const errors: Errors = {};

  if (!name) errors.name = "Name is required";
  if (!description) errors.description = "Description is required";
  if (!location) errors.location = "Location is required";
  if (!status) errors.status = "Status is required";
  if (!images || images.length === 0)
    errors.images = ["At least one image URL is required"];

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, name, location, description, status, images);
  redirect("/products");
}

export async function removeProduct(id: string) {
  await deleteProduct(id);
  revalidatePath("/products");
}
