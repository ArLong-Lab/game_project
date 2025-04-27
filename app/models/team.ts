import mongoose, { Schema } from "mongoose"

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      default: "/placeholder.svg?height=60&width=60",
    },
    wins: {
      type: Number,
      default: 0,
    },
    losses: {
      type: Number,
      default: 0,
    },
    tournaments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
      },
    ],
  },
  { timestamps: true }
)

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema)
export default Team
