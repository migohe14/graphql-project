// Imports: GraphQL
import { gql } from 'apollo-server-express';
import Car from './models/Car';

// GraphQL: TypeDefs
const TYPEDEFS = gql`
type Car {
    _id: String!
    name: String!
  }
  type Query {
    allCars: [Car!]!
  }
  type Mutation {
    createCar(name: String!): Car!
  }

`;
// Exports
export default TYPEDEFS;