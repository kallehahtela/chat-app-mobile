import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <RootStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
