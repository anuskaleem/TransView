import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

import {
  Home,
  TransactionDetails
} from '../Containers';

class App extends React.Component {
  myStack() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="transactionDetails" component={TransactionDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  render() {
    return this.myStack();
  }
}
export default App;
