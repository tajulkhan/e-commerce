import Image from "next/image";
import Link from "next/link";

import React from 'react'

export default function Navbar() {
  return (
    <nav  className="bg-[#000075] p-4 shadow-lg text-white">
    <div className=" max-w-6xl container mx-auto flex justify-between items-center">
      <Link href="/">
        <Image src={"/images/logo/ifs-logo.svg"} width={300} height={70} alt={"INDIAN SEA FOODS"} />
      </Link>
      <div className="sm:hidden md:block hidden">
        <Link href="/cart" className="mr-4 hover:underline">Cart</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  </nav>
  )
}
