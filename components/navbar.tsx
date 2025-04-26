import { Plus } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const NavBar = () => {
    return(
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            Tournaments
          </h1>
          <Link href="/tournament/create">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <Plus className="mr-2 h-4 w-4" />
              Create Tournament
            </Button>
          </Link>
        </div>
      );
}

export default NavBar