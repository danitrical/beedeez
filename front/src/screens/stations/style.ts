import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  loginWrapper: {
    width: '30vw',
  },
  searchInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    elevation: 2,
    height: '50px',
    marginBottom: '20px',
    paddingLeft: '10px',
    width: '40%',
  },
  rowFlex: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    margin: '20px',
    marginRight: '50px',
  },
  buttonWrapper: {
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    height: '50px',
    width: '150px',
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
  },
  heading2: {
    fontSize: 15,
    fontWeight: '400',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  w80: {
    width: '80%',
  },
  marginAll: {
    margin: '20px',
  },
  maxH: {
    maxHeight: '50%',
    minHeight: '49%',
  },
});
