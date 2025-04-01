import Map from "@/components/Map";
import React, { Suspense } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import MapBox from "@/components/Mapbox";

const Contact = () => {
  return (
    <div className="mx-6 md:mx-24 my-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div className="w-full md:w-1/2  flex flex-col rounded-3xl p-2">
          <Suspense fallback={<Skeleton />}>
            {/* <Map /> */}
            <MapBox/>
          </Suspense>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-2 items-center gap-8 place-content-center z-10">
          <Link href="/">
            <div className="text-5xl tracking-wide">Delta Atelier</div>
          </Link>
          <p>
            19 Xô Viết Nghệ Tĩnh, Phường 17,
            <br />
            Bình Thạnh,Ho Chi Minh City, Vietnam
          </p>
          <span className="font-semibold">Working Hour: 9.00 - 18.00</span>
          <span className="font-semibold">Delta.atelier.vn@gmail.com</span>
          <span className="font-semibold">(+84) 79 828 9399</span>
          <div className="flex gap-6">
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
            <Link href={"https://www.viber.com/"}>
              {/* <Image src="/viber.png" alt="" width={32} height={32} /> */}
              Viber
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
