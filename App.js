import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


