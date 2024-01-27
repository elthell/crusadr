const { Army, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw AuthenticationError;
    },
    // user -- populate armies + crusades
    // army -- from user -- populate units (sort function?)
    // armies -- from user
    // crusade -- populate users + armies + battles
    // crusade -- from user -- populate battles (sort function?)
    // crusades -- from user
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // add Army
    // update Army
    // delete Army
    // add Crusade -- invite process for users?
    // update Crusade
    // add Battle
    // add Unit
    // update Unit
    // delete Unit
  },
};

module.exports = resolvers;
