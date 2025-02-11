"use client";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaBars} from "react-icons/fa";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


function Header() {

  const activeLink = usePathname();


  return (
    <nav className="bg-white  w-full  p-4  ">
      <div className=" max-w-7xl mx-auto  flex justify-between items-center">
        {/* Logo */}

        <Link
          href="/"
          className="flex-shrink-0 flex flex-col items-center text-center"
        >
          <span className="text-3xl font-extrabold tracking-wide text-transparent  font-poppins">
            <span className="text-[#FFA500]">MO</span>
            <span className="text-[#FF6B00]">MS</span>
          </span>
          <span className="text-xs text-orange-600 mt-[-2px]">
            Bringing Moments to Life
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="lg:flex space-x-4  hidden   font-medium">
          <Link
            href={"/about"}
            className={`${
              activeLink == "/about"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            href={"/catalog"}
            className={`${
              activeLink == "/catalog"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            CATALOG
          </Link>
          <Link
            href={"/places"}
            className={`${
              activeLink == "/places"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            PLACES
          </Link>
          <Link
            href={"/blog"}
            className={`${
              activeLink == "/blog"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            BLOG
          </Link>
          <Link
            href={"/contact"}
            className={`${
              activeLink == "/contact"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            CONTACT
          </Link>
        </div>

        <div className="flex  items-center justify-between gap-2">
          <div className="md:flex   hidden  items-center relative  mr-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-3 pr-10 py-1.5 rounded-full bg-gray-100 border-gray-200"
            />
            <FiSearch className="absolute right-3 h-4 w-4 text-gray-400" />
          </div>
          <GoBell size={21} className="text-gray-400" />
          <IoSettingsOutline size={21} className="text-gray-400" />
          <button className="w-auto  md:block hidden  px-6 py-2  bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white rounded-full  text-sm font-medium transition-all duration-200 hover:shadow-md">
            Create Account
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-inherit  lg:hidden block text-gray-800 hover:bg-inherit shadow-none text-[30px]">
                <FaBars size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <div className="flex flex-col space-y-4   justify-center items-center  font-medium">
          <Link
            href={"/about"}
            className={`${
              activeLink == "/about"
                ? "text-gray-700  font-bold  mt-14"
                : "text-gray-500  mt-14"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            href={"/catalog"}
            className={`${
              activeLink == "/catalog"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            CATALOG
          </Link>
          <Link
            href={"/places"}
            className={`${
              activeLink == "/places"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            PLACES
          </Link>
          <Link
            href={"/blog"}
            className={`${
              activeLink == "/blog"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            BLOG
          </Link>
          <Link
            href={"/contact"}
            className={`${
              activeLink == "/contact"
                ? "text-gray-700  font-bold"
                : "text-gray-500"
            }`}
          >
            CONTACT
          </Link>
          <button className="w-full  md:hidden block   px-6 py-2  bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white rounded-full  text-sm font-medium transition-all duration-200 hover:shadow-md">
            Create Account
          </button>
        </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div>
      <div className="md:hidden mt-5    flex   items-center relative  mr-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-3 pr-10 py-1.5 border border-gray-300   rounded-full bg-gray-100 "
            />
            <FiSearch className="absolute right-3 h-5 w-5 text-gray-400" />
          </div>
      </div>
    </nav>
  );
}

export default Header;
