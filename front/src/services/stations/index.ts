import axios from 'axios';
const BASEURL = 'http://localhost:3002';
export class StationsService {
  getStations = async () => {
    try {
      const url = `${BASEURL}/stations`;
      // const response = axios.get(url);
      return [
        {
          name: 'station 1',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 0,
            ebike: 50,
          },
        },
        {
          name: 'railway station',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 0,
          },
        },
        {
          name: 'danish Asim',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 50,
          },
        },
        {
          name: 'morgan 1',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 50,
          },
        },
        {
          name: 'joeys 1',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 0,
          },
        },
        {
          name: 'chandler',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 50,
          },
        },
        {
          name: 'Ted Mosby',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 0,
            ebike: 0,
          },
        },
        {
          name: 'station 1',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 50,
          },
        },
        {
          name: 'danish',
          capacity: 123,
          numBikesAvailable: 300,
          types: {
            mechanical: 20,
            ebike: 50,
          },
        },
      ];
    } catch (error) {
      return error;
    }
  };
}
