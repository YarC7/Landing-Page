"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-white text-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-50">
          <Link onClick={() => setOpen((prev) => !prev)} href="/">
            Homepage
          </Link>
          <Link onClick={() => setOpen((prev) => !prev)} href="/projects">
            Projects
          </Link>
          <Link onClick={() => setOpen((prev) => !prev)} href="/about">
            About
          </Link>
          <Link onClick={() => setOpen((prev) => !prev)} href="/contact">
            Contact
          </Link>
          <br />
          <br />
          <div className="flex flex-row gap-12">
            <Link
              href={"https://www.facebook.com/profile.php?id=100091268877738"}
            >
              <Image src="/black-face.png" alt="" width={32} height={32} />
            </Link>
            <Link href={"https://www.instagram.com/"}>
              <Image src="/black-insta.png" alt="" width={32} height={32} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
