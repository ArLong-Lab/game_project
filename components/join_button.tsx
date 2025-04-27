'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useParams } from 'next/navigation';

const Join_Btn = () => {
  const {isSignedIn, user} = useUser();
  const [isInTeam, setIsInTeam] = useState(false);
  const [team, setTeam] = useState<any>(null);
  const params = useParams();

  useEffect(()=>{
    const fetchUser = async () => {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user?.username })
      })
      const data = await response.json();

      if(response.ok){
        setIsInTeam(data.team ? true : false);
        setTeam(data.team)
      }
      else{
        console.log("Error: ",data.message);
      }
    }
    if(params.id && params.id?.length > 1){
      fetchUser();
    }
    return()=>{}
  },[])

  const handelJoinBtn = ()=>{
    const hasJoined = team.tournaments.includes(params.id);
    if(hasJoined){
      return
    }
    const JoinTournament = async()=>{
      
      await fetch("/api/tournament/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamId: team._id, tournamentId: params.id }),
      })      
    }
    JoinTournament();
  }

  if(user?.username == 'admin' || !isSignedIn || !isInTeam || team.tournaments.includes(params.id)){
    return
  }
  return (
    <div className='inline-block'>
      <Button onClick={handelJoinBtn}>Join</Button>
    </div>
  )
}

export default Join_Btn