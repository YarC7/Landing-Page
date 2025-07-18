"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import PopOver from "./PopOver";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const dispatch = useDispatch();
  const isLanguage = useSelector((state: any) => state.language.isLanguage);
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  return (
    <div className="h-16 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" aria-label="Homepage">
          {/* <div className="text-2xl tracking-wide">Delta Atelier</div> */}
          <Image src="/logo.ico" alt="logo" width={64} height={64} priority/>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 justify-between">
          <div className="max-w-16">
            <Link href="/" aria-label="Homepage">
              <Image 
                src="/logo.ico" 
                alt="Delta Atelier Logo" 
                width={64} 
                height={64} 
                priority
                quality={75}
                className="w-auto h-auto"
                loading="eager"
                sizes="64px"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex xl:flex w-1/2 gap-8 ">
          <Link href="/projects">
            {isLanguage === "en" ? (
              <p className="text-lg font-serif ">Projects</p>
            ) : (
              <p className="text-lg font-serif w-20">Dự Án</p>
            )}
          </Link>
          <Link href="/studio">
            {isLanguage === "en" ? (
              <p className="text-lg font-serif">Office</p>
            ) : (
              <p className="text-lg font-serif w-36">Studio</p>
            )}
          </Link>
          <Link href="/contact">
            {isLanguage === "en" ? (
              <p className="text-lg font-serif">Contact</p>
            ) : (
              <p className="text-lg font-serif w-20">Liên Hệ</p>
            )}
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 xl:w-1/4 flex items-center justify-end gap-8">
          <Link
            aria-label="Navigate to Fanpage"
            href={"https://www.facebook.com/profile.php?id=100091268877738"}
          >
            <Image src="/black-face.png" alt="" width={32} height={32} priority/>
          </Link>
          <Link
            href={"https://www.instagram.com/"}
            aria-label="Navigate to Fanpage"
          >
            <Image src="/black-insta.png" alt="" width={32} height={32} priority/>
          </Link>
        </div>
            {isAuth ? (
              <>  
                <div className="w-[2px] h-6 bg-black" />
                <LogoutButton  aria-label="Logout" />
              </>
            ) : (
              <Link className="hidden" href="/login">Login</Link>
            )}
      </div>
    </div>
  );
};

export default Navbar;
