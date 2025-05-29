import React from "react";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import Link from "next/link";

export default function header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfo} />
      </div>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
