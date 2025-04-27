"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const NavButton = () => {
  
  const { isSignedIn, user, isLoaded } = useUser();
  const [team, setTeam] = useState<any>(null);

   function AlertDialogTeaam() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">{team.name}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{team._id}</AlertDialogTitle>
            <AlertDialogDescription>
              Here's your team ID. You can use this to add members to your team
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  useEffect(()=>{
    if (isLoaded && isSignedIn){
      const fetchTeam = async()=>{
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: user.username })
        })
        const data = await response.json();
        if(response.ok){
          setTeam(data.team);
        }
        else{
          console.log("Error: ",data.message);
        }
      }
      fetchTeam();
    }
    return()=>{}
  },[])

  return (
    <div className="inline-block">
      {user?.username == "admin" ? (
        <Link href="/tournament/create" className="pr-5">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            Create Tournament
          </Button>
        </Link>
      ) : ( team ?(
        <div className="">
          <AlertDialogTeaam/>
        </div>
      ):(
        <Link href="/tournament/team" className="pr-5">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            join Team
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavButton;
