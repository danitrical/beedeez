import {FC, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './style';

export const Header: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(true);

  return (
    <View style={styles.rowFlex}>
      <Text style={styles.heading}>Stations</Text>
      <TextInput
        style={styles.searchInput}
        placeholder={'Search By Name'}
        onChangeText={(name: string) => setSearchText(name)}
      />
    </View>
  );
};
