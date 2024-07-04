import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type UserSettings {
    theme: String!
    notifications: Boolean!
  }

  type ExerciseData {
    title: String!
    description: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    settings: UserSettings!
  }

  type Exercise {
    id: ID!
    name: String!
    exercisedata: ExerciseData!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    exercises: [Exercise!]
    exercise(id: ID!): Exercise
    userExercises(userId: ID!): [Exercise!]
  }

  type Mutation {
    createUser(username: String!, email: String!, settings: UserSettingsInput!): User
    createExercise(name: String!, exercisedata: ExerciseDataInput!): Exercise
  }

  input UserSettingsInput {
    theme: String!
    notifications: Boolean!
  }

  input ExerciseDataInput {
    title: String!
    description: String!
  }
`);
