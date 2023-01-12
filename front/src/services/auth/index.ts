import axios from 'axios';
const BASEURL = 'http://localhost:3002';
export class AuthService {
  login = async (data: ILoginData) => {
    try {
      const url = `${BASEURL}/login`;
      const response = axios.post(url, data, {
        timeout: 60000,
      });

      console.log({response});
      // if (response?.cookie) localStorage
    } catch (error) {
      return error;
    }
  };

  signUp = async (data: ILoginData) => {
    try {
      const url = `${BASEURL}/signup`;
      const response = axios.post(url, data, {
        timeout: 60000,
      });

      console.log({response});
      // if (response?.cookie) localStorage
    } catch (error) {
      return error;
    }
  };
}
