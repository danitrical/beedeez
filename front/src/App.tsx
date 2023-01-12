import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import reduxStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClientProvider, QueryClient} from 'react-query';

import {AppNavigator} from './navigators/AppNavigator';

export const {store, persistor} = reduxStore();

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
