"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const NavButton = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="inline-block">
      {user?.username == "admin" ? (
        <Link href="/tournament/create" className="pr-5">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            Create Tournament
          </Button>
        </Link>
      ) : (
        <Link href="/tournament/team" className="pr-5">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            join Team
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavButton;
