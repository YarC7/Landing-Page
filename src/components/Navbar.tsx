"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLanguage = useSelector((state: any) => state.language.isLanguage);
  return (
    <div className="h-20 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-32 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          {/* <div className="text-2xl tracking-wide">Delta Atelier</div> */}
          <Image src="/logo.ico" alt="" width={64} height={64} />
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-2/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.ico" alt="" width={64} height={64} />
            <div className="text-2xl tracking-wide">Delta Atelier</div>
          </Link>
          <div className="hidden xl:flex gap-6">
            {/* <Link href="/">Homepage</Link> */}
            <Link href="/projects">
              {isLanguage === "en" ? (
                <p className="text-xl">Projects</p>
              ) : (
                <p className="text-xl">Dự Án</p>
              )}
            </Link>
            <Link href="/about">
              {isLanguage === "en" ? (
                <p className="text-xl">About</p>
              ) : (
                <p className="text-xl">Về Chúng Tôi</p>
              )}
            </Link>
            <Link href="/contact">
              {isLanguage === "en" ? (
                <p className="text-xl">Contact</p>
              ) : (
                <p className="text-xl">Liên Hệ</p>
              )}
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 xl:w-1/4 flex items-center justify-end gap-8">
          <Link
            href={"https://www.facebook.com/profile.php?id=100091268877738"}
          >
            <Image src="/black-face.png" alt="" width={32} height={32} />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Image src="/black-insta.png" alt="" width={32} height={32} />
          </Link>
          {/* 
          <Link href={"https://www.zalo.com/"}>
            <Image src="/zalo.png" alt="" width={32} height={32} />
          </Link>
          <Link href={"https://www.viber.com/"}>
            <Image src="/viber.png" alt="" width={32} height={32} />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
