export interface Tournament {
  _id: string;
  name: string;
  description: string;
  date: string; // ISO string
  startTime: string;
  endTime: string;
  location: string;
  type: string;
  prize: string;
  maxTeams: number;
  rules: string[];
  status: string | "upcoming";
  teams: number | 10;
  image: string | "/placeholder.svg?height=80&width=80";
}

export interface Team{
  _id: string;
  name: string;
  logo: string | "/placeholder.svg?height=60&width=60";
  wins: number | 0;
  losses: number | 0;
  tournaments?: string[];
}

export interface User{
    _id: string;
    username: string;
    team?: string;
}