const { Schema, model } = require("mongoose");
const unitSchema = require("./subdocs/Unit");

const armySchema = new Schema(
  {
    faction: {
      type: String,
      required: true,
    },
    factionRules: {
      type: String,
      minlength: 1,
      maxlength: 250,
    },
    detachment: {
      type: String,
      required: true,
    },
    detachmentRules: {
      type: String,
      minlength: 1,
      maxlength: 250,
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
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// another field for unit count when querying an army
armySchema.virtual("unitCount").get(function () {
  return this.units.length;
});

const Army = model("Army", armySchema);

module.exports = Army;
