import { Tournament } from "@/lib/types";

const API_URL = "/api/tournament";

export const createTournament = async (data: Tournament) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create tournament");
  }

  const tournament = await res.json();
  return tournament as Tournament;
};

export const getTournaments = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // if you want fresh data every time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tournaments");
  }

  const tournaments = await res.json();
  return tournaments as Tournament[];
};
