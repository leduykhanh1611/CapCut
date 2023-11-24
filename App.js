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
import setting from './src/setting';
import setting_2 from './src/setting_2';
import view_history from './src/view_history';


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name='edit' component={edit} />
        <stack.Screen name='template' component={template} />
        <stack.Screen name='inbox' component={inbox} />
        <stack.Screen name='inbox1_2' component={inbox1_2} />
        <stack.Screen name='inbox1_3' component={inbox1_3} />
        <stack.Screen name='inbox2' component={inbox2} />
        <stack.Screen name='me' component={me} />
        <stack.Screen name='me_1' component={me_1} />
        <stack.Screen name='setting' component={setting} />
        <stack.Screen name='setting_2' component={setting_2} />
        <stack.Screen name='view_history' component={view_history} />
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