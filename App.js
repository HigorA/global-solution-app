import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
}

