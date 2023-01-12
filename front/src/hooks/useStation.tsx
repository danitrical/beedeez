import {useQuery} from 'react-query';
import {StationsService} from '../services';

const stationService = new StationsService();
const refetchInterval = 60000;

export const useGetStations = () =>
  useQuery(['stations'], () => stationService.getStations(), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval,
  });
