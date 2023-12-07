import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BeergardenMap from './screens/BeergardenMap';
import BeergardenDetails from './screens/BeergardenDetails';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen}  options={{ title: 'Home' }}/>
        <Stack.Screen name='BeergardenMap' component={BeergardenMap}  options={{ title: 'Beergarden Map' }}/>
        <Stack.Screen name='BeergardenDetails' component={BeergardenDetails}  options={{ title: 'Beergarden Details'}} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
