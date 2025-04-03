"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setIsLanguage } from "@/lib/features/language/languageSlice";
const Footer = () => {
  const dispatch = useDispatch();
  const isLanguage = useSelector((state: any) => state.language.isLanguage);
  const handleLanguageChange = (lang: string) => {
    dispatch(setIsLanguage(lang));
  };
  return (
    <div className="py-6 px-4 md:px-6 lg:px-6 xl:px-24 2xl:px-32 text-sm border-t-2 ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between justify-items-center gap-4">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center text-center">
          <Link href="/">
            <div className="text-2xl tracking-wide">
              Delta Atelier Architecture
            </div>
          </Link>
          <p>8/3 , 3 Street, An Khanh Ward, Thu Duc City <br /> Ho Chi Minh City</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center">
          {isLanguage === "en" ? (
            <h1 className="font-medium text-lg">Contact Us</h1>
          ) : (
            <h1 className="font-medium text-lg">Liên hệ với chúng tôi:</h1>
          )}
          <div className="flex gap-6">
            <span className="font-semibold">Delta.atelier.vn@gmail.com</span>
          </div>
          <span className="font-semibold">(+84) 79 828 9399</span>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center">
          {isLanguage === "en" ? (
            <h1 className="font-medium text-lg">Follow Us</h1>
          ) : (
            <h1 className="font-medium text-lg">Theo dõi chúng tôi:</h1>
          )}
          <div className="flex gap-6">
            <Link
              href={"https://www.facebook.com/profile.php?id=100091268877738"}
            >
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </Link>
            <Link href={"https://www.instagram.com/"}>
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
        {/* <div className="">@NgDCanh</div> */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="">
            {isLanguage === "en" ? (
              <span className="text-gray-500 mr-4">Language</span>
            ) : (
              <span className="text-gray-500 mr-4">Ngôn ngữ</span>
            )}
            <span className="font-medium">
              <button
                onClick={() => handleLanguageChange("vi")}
                className={`mr-2 ${isLanguage === "vi" ? "text-blue-500" : ""}`}
              >
                Vietnamese
              </button>
              |
              <button
                onClick={() => handleLanguageChange("en")}
                className={`ml-2 ${isLanguage === "en" ? "text-blue-500" : ""}`}
              >
                English
              </button>
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-gray-500">© 2024 Delta Atelier</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
