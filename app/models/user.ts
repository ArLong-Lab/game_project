import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
  },
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User
