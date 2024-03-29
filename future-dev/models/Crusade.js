const { Schema, Types } = require("mongoose");
const battleSchema = require("./Battle");

const crusadeSchema = new Schema(
  {
    setting: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    users: [
      {
        userName: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        userArmy: {
          type: Schema.Types.ObjectId,
          ref: "Army",
        },
        userPoints: {
          type: Number,
          default: 0,
        },
      },
    ],
    battles: [battleSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// another field for battle count when querying a crusade
crusadeSchema.virtual("battleCount").get(function () {
  return this.battles.length;
});

const Crusade = model("Crusade", crusadeSchema);

module.exports = Crusade;
