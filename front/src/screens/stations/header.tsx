import {FC, useCallback, useEffect, useState} from 'react';
import {Switch, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import debounce from 'lodash.debounce';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAutomaticBikeStations,
  getManualBikeStations,
  getStationsData,
} from '../../store/selectors';
import {resetSearchData, setSearchData} from '../../store/slices/stations';
import {useGetStations} from '../../hooks';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const stations = useSelector(getStationsData);
  const mechanicalStations = useSelector(getManualBikeStations);
  const eBikeStations = useSelector(getAutomaticBikeStations);
  const [mechanical, setMechanical] = useState(false);
  const [ebike, setEbike] = useState(false);

  const {refetch} = useGetStations();

  const debounceSearchHandler = useCallback(
    debounce((text: string) => searchStations(text), 500),
    [],
  );

  useEffect(() => {
    if (searchText != '') {
      const res = filterData(stations, searchText);
      dispatch(setSearchData(res));
    }
    if (searchText === '') dispatch(resetSearchData());
  }, [searchText]);

  const searchStations = (text: any) => {
    setSearchText(text);
  };

  const filterData = (data: any[], value: string) =>
    [...data]?.filter((item: any) => item?.name?.indexOf(value) > -1);

  useEffect(() => {
    if (ebike && mechanical) dispatch(setSearchData(stations));
    if (!ebike && !mechanical) dispatch(setSearchData(stations));
    if (ebike) dispatch(setSearchData(eBikeStations));
    if (mechanical) dispatch(setSearchData(mechanicalStations));
  }, [ebike, mechanical]);

  useEffect(() => {
    if (mechanical) dispatch(setSearchData(mechanicalStations));
  }, [mechanical]);

  return (
    <View style={styles.rowFlex}>
      <Text style={styles.heading}>Stations</Text>
      <View>
        <Text style={styles.heading2}>Ebikes</Text>
        <Switch value={ebike} onValueChange={value => setEbike(value)} />
      </View>
      <View>
        <Text style={styles.heading2}>Mechanical</Text>
        <Switch
          value={mechanical}
          onValueChange={value => setMechanical(value)}
        />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder={'Search By Name'}
        onChangeText={(name: string) => debounceSearchHandler(name)}
      />
    </View>
  );
};
