import Pollution from "../models/Pollution.js";

export const addPollution = async (req, res) => {
  try {
    const record = await Pollution.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllPollution = async (req, res) => {
  try {
    const records = await Pollution.find().sort({ measuredAt: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePollution = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Pollution.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Record not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePollution = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pollution.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Record not found" });
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
