require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const workoutRoutes = require("./routes/workouts");
const typeDefs = require("./graphqlSchema/typeDefs");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation")
const cors = require('cors')
const app = express();

app.use(cors())

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    context: () => {
      return {
       
      }
    }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.use("/api/workouts", workoutRoutes);
// connect the db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to db $ Server started at localhost:4000");
      });
      
  })
  .catch((err) => {
    console.log(err);
  });


