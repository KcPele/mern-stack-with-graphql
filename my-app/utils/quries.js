import { gql } from "@apollo/client";



export const GET_WORKOUTS = gql`
query GetWorkouts{
    workouts{
        _id
        title
        reps 
        load
        createdAt
    }
}
`