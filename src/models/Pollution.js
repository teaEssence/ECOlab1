import mongoose from "mongoose";

const PollutionSchema = new mongoose.Schema({
  location: { type: String, required: true },
  dust25: { type: Number, required: true },
  dust10: { type: Number, required: true },
  measuredAt: { type: Date, default: Date.now }
});

export default mongoose.model("Pollution", PollutionSchema);
