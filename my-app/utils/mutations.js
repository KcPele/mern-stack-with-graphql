import { gql } from '@apollo/client';

// Define mutation
export const  ADD_WORKOUT = gql`
 mutation AddWorkout($title: String!, $reps: Int!, $load: Int!) {
  addWorkout(title: $title, reps: $reps, load: $load) {
    _id
  }
}
`;
