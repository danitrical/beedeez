import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const StationListItem: FC<any> = ({data}) => {
  return (
    <View style={styleItem.background}>
      <View style={styleItem.nameCol}>
        <Text>Name</Text>
        <Text style={styleItem.value}>{data?.name}</Text>
      </View>
      <View>
        <Text>Capacity</Text>
        <Text style={styleItem.value}>{data?.capacity}</Text>
      </View>
      <View>
        <Text>Bikes Available</Text>
        <Text style={styleItem.value}>{data?.numBikesAvailable}</Text>
      </View>
      <View>
        <Text>Mechanical</Text>
        <Text style={styleItem.value}>{data?.types?.mechanical}</Text>
      </View>
      <View>
        <Text>E-Bike</Text>
        <Text style={styleItem.value}>{data?.types?.ebike}</Text>
      </View>
    </View>
  );
};

const styleItem = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '20px',
    padding: '20px',
    '@media (max-width: 800px) and (min-width: 400px)': {
      flexDirection: 'column',
    },
  },
  value: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: '2px',
  },
  nameCol: {
    width: '15%',
    overflow: 'hidden',
  },
});
