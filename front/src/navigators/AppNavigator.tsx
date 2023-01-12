import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './utils';
import {SCREENS} from './screens';
import {Login, Stations} from '../screens';
import {deleteUserData} from '../store/slices/auth';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('storage', () => {
      if (
        !localStorage.beedeezToken ||
        localStorage.beedeezToken === undefined
      ) {
        dispatch(deleteUserData());
        navigation.navigate(SCREENS.LOGIN);
      } else {
        navigation.navigate(SCREENS.STATIONS);
      }
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen name={SCREENS.STATIONS} component={Stations} />
    </Stack.Navigator>
  );
};

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: 'login',
      [SCREENS.STATIONS]: 'stations',
    },
  },
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
