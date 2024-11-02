import Map from "@/components/Map";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mx-24 my-12">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-full lg:w-1/2 flex flex-col rounded-3xl">
          <Map />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12 justify-items-center gap-8">
          <Link href="/">
            <div className="text-5xl tracking-wide">Delta Atelier</div>
          </Link>
          <p>
            19 Xô Viết Nghệ Tĩnh, Phường 17, Bình Thạnh, Ho Chi Minh City,
            Vietnam
          </p>
          <span className="font-semibold">Delta.atelier.vn@gmail.com</span>
          <span className="font-semibold">(+84) 79 828 9399</span>
          <div className="flex gap-6">
            <Link
              href={"https://www.facebook.com/profile.php?id=100091268877738"}
            >
              <Image src="/facebook.png" alt="" width={32} height={32} />
            </Link>
            <Link href={"https://www.instagram.com/"}>
              <Image src="/instagram.png" alt="" width={32} height={32} />
            </Link>
            <Link href={"https://www.zalo.com/"}>
            <Image src="/zalo.png" alt="" width={32} height={32} />
          </Link>
          <Link href={"https://www.viber.com/"}>
            <Image src="/viber.png" alt="" width={32} height={32} />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
