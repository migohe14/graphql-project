// Imports: Express
import express from 'express';
const APP = express();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-mongo')
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));
import Car from './models/Car';


// Imports: GraphQL
import SERVER from './schema';
// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = 3000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
export default APP;