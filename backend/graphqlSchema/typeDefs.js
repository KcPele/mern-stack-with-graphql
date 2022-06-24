const { gql } = require('apollo-server-express');

module.exports = gql`
  
  type Workout {
    _id: ID!
    title: String!
    reps: Int!
    load: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    workouts: [Workout]
    workout(id: ID!): Workout!
  }

  type Mutation {
    addWorkout(input: AddWorkout!): Workout!
    updateWorkout(input: UpdateWorkout): Workout!
    deleteWorkout(_id: ID!): Workout!
  }

  input AddWorkout {
    title: String!
    reps: Int!
    load: Int!
  }
  
  input UpdateWorkout {
    _id: ID!
    title: String
    reps: Int
    load: Int
  }
`;