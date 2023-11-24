import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import edit from './src/edit';
import template from './src/template';
import inbox from './src/inbox';
import inbox1_2 from './src/inbox1_2';
import inbox1_3 from './src/inbox1_3';
import inbox2 from './src/inbox2';
import me from './src/me';
import me_1 from './src/me_1';


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='me_1' screenOptions={{ headerShown: false }}>
        <stack.Screen name='edit' component={edit} />
        <stack.Screen name='template' component={template} />
        <stack.Screen name='inbox' component={inbox} />
        <stack.Screen name='inbox1_2' component={inbox1_2} />
        <stack.Screen name='inbox1_3' component={inbox1_3} />
        <stack.Screen name='inbox2' component={inbox2} />
        <stack.Screen name='me' component={me} />
        <stack.Screen name='me_1' component={me_1} />
      </stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});