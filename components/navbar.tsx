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
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1></h1>
      <div className="">
        <Link
          href={"#"}
          className="text-2xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
        >
          Home
        </Link>
        <Link
          href={"/tournament"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
        >
          Tournaments
        </Link>
        <Link
          href={"/community"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
        >
          Community
        </Link>
        <Link
          href={"/news"}
          className="text-2xl pl-4 font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
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
