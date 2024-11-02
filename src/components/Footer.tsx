import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
  return (
    <div className="py-6 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Delta Atelier</div>
          </Link>
          <p>
            19 Xô Viết Nghệ Tĩnh, Phường 17, Bình Thạnh, Ho Chi Minh City, Vietnam
          </p>
          <span className="font-semibold">Delta.atelier.vn@gmail.com</span>
          <span className="font-semibold">(+84) 79 828 9399</span>
          <div className="flex gap-6">
            <Link href={"https://www.facebook.com/profile.php?id=100091268877738"}>
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </Link >
            <Link href={"https://www.instagram.com/"}>
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </Link>
            {/* <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} /> */}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          
        </div>
      </div>  
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        <div className="">© 2024 Delta Atelier</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">From Cray</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
