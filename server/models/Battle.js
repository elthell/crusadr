const { Schema, model } = require("mongoose");

const battleSchema = new Schema({
  players: [
    {
      userName: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      userArmy: {
        type: Schema.Types.ObjectId,
        ref: "Army",
      },
    },
  ],
  mission: {
    type: String,
    required: true,
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// const Battle = model("Battle", battleSchema);

module.exports = battleSchema;
