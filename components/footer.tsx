import Image from "next/image";
import Link from "next/link";
import * as React from "react";



function Footer() {
  return (
    <div className="bg-[#1E0000] flex flex-col justify-center items-center px-16 py-10 max-md:px-5">
      <header className="flex w-full max-w-7xl flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full items-stretch justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex flex-col">
            <Image src="/logo.png" alt="footer" width={50}
            height={79} 
            className="w-fit h-[49px]"/>
            <p className="justify-center text-rose-100 text-xs font-medium leading-5 tracking-normal whitespace-nowrap mt-2">
            Serving Every Citizen
            </p>
          </div>
          <ul className="justify-between items-start self-center flex gap-5 my-auto py-1 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <Link href="#about" className="justify-center text-white text-xs leading-5 tracking-normal self-center my-auto">
              Grievance Redressal
            </Link>
            <Link href="#"  className="justify-center text-white text-xs leading-5 tracking-normal self-stretch" >
              Contact
            </Link>
            <Link href="#" className="justify-center text-white text-xs leading-5 tracking-normal self-stretch" >
              Schemes
            </Link>
            <Link href="#"  className="justify-center text-white text-xs leading-5 tracking-normal self-stretch" >
              Know Your Municipality
            </Link>
          </ul>
        </div>
        <hr className="bg-gray-500 shrink-0 h-px mt-7 max-md:max-w-full" />
        <div className="flex items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
          <p className="justify-center text-rose-100 text-xs leading-5 tracking-normal grow shrink basis-auto">
            Copyright © 2025 . All Rights Reserved
          </p>
          <p className="text-white text-xs leading-5 tracking-normal">Developed By ERROR503</p>
        </div>
      </header>
    </div>
  );
}
export default Footer;
