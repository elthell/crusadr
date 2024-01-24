const typeDefs = `
type Army {}

type Crusade {}

type User {}

type Auth {
  token: ID!
  user: User
}

type Query {}

type Mutation {}
`;

module.exports = typeDefs;
