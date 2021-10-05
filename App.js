import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen options={{headerShown: false}} name="LoginPage" component={LoginPage}/>
                <Stack.Screen name="HomePage" component={HomePage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


