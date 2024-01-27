const typeDefs = `
type User {
  _id: ID!
  username: String!
  password: String!
  armies: [Army]
}

type Army {
  _id: ID!
  faction: String!
  factionRules: String!
  detachment: String!
  detachmentRules: String!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email:String!, password: String!):Auth
},
`;

module.exports = typeDefs;
