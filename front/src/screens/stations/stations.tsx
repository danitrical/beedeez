import {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ScrollView,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetStations} from '../../hooks';
import {getSearchStationsData} from '../../store/selectors';
import {setStationsData} from '../../store/slices/stations';
import {Header} from './header';
import {StationListItem} from './stationListItem';
import {styles} from './style';

export const Stations: FC = () => {
  const dispatch = useDispatch();
  const stations = useSelector(getSearchStationsData);

  const {isLoading, isSuccess, data, refetch} = useGetStations();

  const renderStationData: ListRenderItem<any> = ({item}) => (
    <StationListItem data={item} />
  );

  useEffect(() => {
    if (isSuccess && data) dispatch(setStationsData(data));
  }, [isSuccess, data]);

  if (isLoading) <ActivityIndicator size={'small'} />;
  return (
    <View>
      <Header />
      <ScrollView style={styles.maxH} scrollEnabled>
        <FlatList data={stations} renderItem={renderStationData} />
      </ScrollView>
    </View>
  );
};
