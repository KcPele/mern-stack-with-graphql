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
    addWorkout(title: String!, reps: Int!, load: Int!): Workout!
    updateWorkout(_id: ID!, title: String, reps: Int, load: Int): Workout!
    deleteWorkout(_id: ID!): Workout!
  }


`;