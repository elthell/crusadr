const { Schema, model } = require("mongoose");
const unitSchema = require("./Unit");

const armySchema = new Schema({
  faction: {
    type: String,
    required: true,
    trim: true,
  },
  detachment: {
    type: String,
    required: true,
    trim: true,
  },
  detachmentRules: {
    type: String,
    trim: true,
  },
  victoryPoints: {
    type: Number,
  },
  units: [unitSchema],
});

const Army = model("Army", armySchema);

module.exports = Army;
