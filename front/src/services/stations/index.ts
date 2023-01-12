import axios from 'axios';
const BASEURL = 'http://localhost:3002';
export class StationsService {
  getStations = async () => {
    try {
      const url = `${BASEURL}/stations`;
      const response = axios.get(url);

      return response;
    } catch (error) {
      return error;
    }
  };
}
