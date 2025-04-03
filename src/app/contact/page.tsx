import Map from "@/components/Map";
import React, { Suspense } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import MapBox from "@/components/Mapbox";

const Contact = () => {
  return (
    <div className="mx-0 md:mx-6 my-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div className="w-full md:w-2/3  flex flex-col rounded-3xl">
          <Suspense fallback={<Skeleton />}>
            {/* <Map /> */}
            <MapBox />
          </Suspense>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-8 pl-4 z-10">
          <Link href="/">
            <div className="text-3xl tracking-wide">
              Delta Atelier Architechture
            </div>
          </Link>
          <div className="p-2 flex flex-col">
            <p >
              8/3, 3 Street, An Khanh Ward, Thu Duc City
              <br />
              Ho Chi Minh City, Vietnam
            </p>
            <br />
            <span className="font-semibold">Working Hour: 9.00 - 18.00</span>
            <br />
            <span className="font-semibold">Delta.atelier.vn@gmail.com</span>
            <br />
            <span className="font-semibold">(+84) 79 828 9399</span>
          </div>
          <div className="flex flex-col gap-6 p-2">
            <Link
              href={"https://www.facebook.com/profile.php?id=100091268877738"}
            >
              {/* <Image src="/facebook.png" alt="" width={32} height={32} /> */}
              Facebook
            </Link>
            <Link href={"https://www.instagram.com/"}>
              {/* <Image src="/instagram.png" alt="" width={32} height={32} /> */}
              Instagram
            </Link>
            {/* <Link href={"https://www.zalo.com/"}>
            <Image src="/zalo.png" alt="" width={32} height={32} />
            Zalo
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
