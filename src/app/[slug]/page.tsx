import ProjectNavigation from "@/components/ProjectNavigation";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProductbySlug, getProducts, getProductsWithSlug } from "@/prisma-db";
import React,{ Suspense } from "react";
import Skeleton from "@/components/Skeleton";
const ProductImages = React.lazy(() => import('@/components/ProductImage'));


export const revalidate = 60; // tái tạo sau mỗi 60s
const SinglePage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;

  const product = await getProductbySlug(params.slug);


  if (!product) {
    return notFound();
  }

  const productsSlug = await getProductsWithSlug();

  const projectList = productsSlug.map((item) => ({
    name: `${item.name}`,
    href: `/${item.slug}`,
  }));
  const currentIndex = projectList.findIndex(
    (p) => p.href === `/${params.slug}`
  );

  // Xác định dự án trước và sau
  const previousProject =
    currentIndex > 0 ? projectList[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projectList.length - 1
      ? projectList[currentIndex + 1]
      : undefined;
  return (
    <div>
      <div className="p-4 md:p-4 lg:p-4 xl:p-8 2xl:p-16 relative gap-16">
        {/* IMG */}
        <div className="w-full lg:sticky top-20 h-max">
          <Suspense fallback={<Skeleton />}>
            <ProductImages items={product.images} />
          </Suspense>
        </div>
      </div>
      <div className="w-full h-max p-12 flex  gap-6 items-center justify-evenly">
        <div className="w-[500px] flex flex-col lg:flex-row ">
          <div className="w-1/2">
            <h1 className="text-4xl font-medium">{product.name}</h1>
          </div>
          <div className="w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Project Info</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
                <AccordionContent>
                  Location: {product.location}
                </AccordionContent>
                <AccordionContent>Status: {product.status}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default SinglePage;
