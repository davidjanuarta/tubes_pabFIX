import * as React from 'react';
import Appstack from './components/Appstack';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Appstack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;