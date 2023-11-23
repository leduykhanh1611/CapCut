import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import edit from './src/edit';
import template from './src/template';
import inbox from './src/inbox';
import inbox2 from './src/inbox2';
import me from './src/me';


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name='edit' component={edit} />
        <stack.Screen name='template' component={template} />
        <stack.Screen name='inbox' component={inbox} />
        <stack.Screen name='inbox2' component={inbox2} />
        <stack.Screen name='me' component={me} />
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