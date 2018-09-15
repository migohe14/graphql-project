// Imports: Axios
import axios from 'axios';
import Car from './models/Car';

// GraphQL: Resolvers
  const RESOLVERS = {
    Query: {
        allCars: async (parent, args, { Car }) => {
            const cars = await Car.find();
            return cars.map(x => {
              x._id = x._id.toString();
              return x;
            })
          }
    // test_query: (parent, args) => {
    //   return axios.get(`www.apiurl.com/people`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // }
  },

  Mutation: {
    createCar: async (parent, args, { Car }) => {
      const car = await new Car(args).save();
      car._id = car._id.toString();
      return car;
    }
  }
};
// Exports
export default RESOLVERS;