import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  loginWrapper: {
    width: 'auto',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    elevation: 2,
    height: '50px',
    marginBottom: '20px',
    paddingLeft: '10px',
    width: '100%',
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonWrapper: {
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    height: '50px',
    width: '150px',
  },
  heading3: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 20,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
});
