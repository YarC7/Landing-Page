import { PrismaClient } from "../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();
export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
      include: {
        images: true,
      },
    });
  }
  return prisma.product.findMany({
    include: {
      images: true,
    },
  });
}

export async function getImages(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.image.findMany({
    where: {
      productId: id,
    },
    select: {
      imageUrl: true,
    },
  });
}

export async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
    include: {
      images: true,
    },
  });
}

export async function getProductbySlug(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findFirst({
    where: { slug },
    include: {
      images: true,
    },
  });
}

export async function addProduct(
  name: string,
  description: string,
  location: string,
  status: string,
  images: string[]
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return prisma.product.create({
    data: {
      name,
      slug,
      description,
      location,
      status,
      images: {
        create: images.map((url) => ({
          imageUrl: url,
        })),
      },
    },
    include: {
      images: true,
    },
  });
}

export async function updateProduct(
  id: string,
  name: string,
  description: string,
  location: string,
  status: string,
  images: string[]
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      location,
      status,
      images: {
        deleteMany: {},
        create: images.map((url) => ({
          imageUrl: url,
        })),
      },
    },
    include: {
      images: true,
    },
  });
}

export async function deleteProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await prisma.image.deleteMany({
    where: { productId: id },
  });
  return prisma.product.delete({ where: { id } });
}
