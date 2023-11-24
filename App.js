import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
        <Toast />
      </Provider>
    </>
  );
}

