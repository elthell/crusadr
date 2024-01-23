const { Schema, model } = require("mongoose");

const unitSchema = new Schema({
  unitName: {
    type: String,
    required: true,
  },
  unitStats: [
    {
      movement: {
        type: Number,
        default: 0,
      },
      toughness: {
        type: Number,
        default: 0,
      },
      save: {
        type: Number,
        default: 0,
      },
      wounds: {
        type: Number,
        default: 0,
      },
      leadership: {
        type: Number,
        default: 0,
      },
      obsec: {
        type: Number,
        default: 0,
      },
    },
  ],
  unitInvuln: {
    type: Number,
    default: 0,
  },
  unitRanged: [
    {
      rangedName: {
        type: Number,
        default: 0,
      },
      range: {
        type: Number,
        default: 0,
      },
      attacks: {
        type: Number,
        default: 0,
      },
      ballistics: {
        type: Number,
        default: 0,
      },
      strength: {
        type: Number,
        default: 0,
      },
      ap: {
        type: Number,
        default: 0,
      },
      damage: {
        type: Number,
        default: 0,
      },
      keywords: [{ type: String }],
    },
  ],
  unitMelee: [
    {
      meleeName: {
        type: Number,
        default: 0,
      },
      range: {
        type: Number,
        default: 0,
      },
      attacks: {
        type: Number,
        default: 0,
      },
      ballistics: {
        type: Number,
        default: 0,
      },
      strength: {
        type: Number,
        default: 0,
      },
      ap: {
        type: Number,
        default: 0,
      },
      damage: {
        type: Number,
        default: 0,
      },
      keywords: [{ type: String }],
    },
  ],
  unitAbilities: [
    {
      abilityName: {
        type: String,
        required: true,
      },
      abilityText: {
        type: String,
        minlength: 1,
        maxlength: 250,
      },
    },
  ],
  unitPoints: {
    type: Number,
    default: 0,
  },
  unitKeywords: [{ type: String }],
});

module.exports = unitSchema;
