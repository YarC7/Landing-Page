import ProductImages from "@/components/ProductImage";
import ProjectNavigation from "@/components/ProjectNavigation";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import {Accordion, AccordionItem} from "@heroui/accordion";
const SinglePage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  const productsResponse = await wixClient.products.queryProducts().find();
  const productss = productsResponse.items;
  const projectList = productss.map((item) => ({
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
          <ProductImages items={product.media?.items} />
        </div>

        {/* TEXTS */}
        {/* <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500">{product.description}</p>
      </div> */}
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
                <AccordionContent>
                  Description: @@@@@@@@@@@@@@@@
                </AccordionContent>
                <AccordionContent>Location: #!@#$%^&*_+-=</AccordionContent>
                <AccordionContent>
                  Status: pending/in progress/complete
                </AccordionContent>
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
