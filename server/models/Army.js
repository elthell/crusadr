const { Schema, model } = require("mongoose");
const unitSchema = require("./subdocs/Unit");

const armySchema = new Schema({
  faction: {
    type: String,
    required: true,
  },
  factionRules: {
    type: String,
  },
  detachment: {
    type: String,
    required: true,
  },
  detachmentRules: {
    type: String,
  },
  strategems: [
    {
      stratName: {
        type: String,
        required: true,
      },
      stratCost: {
        type: Number,
        required: true,
        default: 0,
      },
      stratText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 250,
      },
    },
  ],
  units: [unitSchema],
});

const Army = model("Army", armySchema);

module.exports = Army;
