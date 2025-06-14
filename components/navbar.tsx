import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import NavButton from "./navbutton";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
      <h1 className="text-4xl pl-4 font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">LeveLUP</h1>
      <div className="">
        <Link
          href={"#"}
          className="text-2xl font-bold mb-4 md:mb-0 text-white"
        >
          Home
        </Link>
        <Link
          href={"/tournament"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-white"
        >
          Tournaments
        </Link>
        <Link
          href={"/community"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-white"
        >
          Community
        </Link>
        <Link
          href={"/news"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-white"
        >
          News
        </Link>
      </div>

      <SignedIn>
        <div>
            <NavButton/>
            <UserButton/>
        </div>
      </SignedIn>

      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
    </div>
  );
};

export default NavBar;
