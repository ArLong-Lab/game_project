import mongoose, { Schema, Document } from 'mongoose';

export interface ITournament extends Document {
  name: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  type: string;
  prize: string;
  maxTeams: number;
  rules: string[];
  status?: string; // optional
  teams?: number;  // optional
  image?: string;  // optional
}

const TournamentSchema = new Schema<ITournament>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  location: { type: String, default: "Online" },
  type: { type: String, required: true },
  prize: { type: String, required: true },
  maxTeams: { type: Number, required: true },
  rules: [{ type: String }],
  status: { type: String , default:"Upcoming"}, // optional now
  teams: { type: Number , default: 10},  // optional now
  image: { type: String , default: "/placeholder.svg?height=80&width=80"},  // optional now
});

export default mongoose.models.Tournament || mongoose.model<ITournament>('Tournament', TournamentSchema);
