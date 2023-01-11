import React from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const StackLoggedOut = createStackNavigator<RootStackLogoutParamList>();
const StackLoggedIn = createStackNavigator<RootStackLoginParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator
            initialRouteName={'LoginScreen'}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        <StackLoggedIn.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}>
            <StackLoggedIn.Screen name={'HomeScreen'} component={HomeScreen} />
        </StackLoggedIn.Navigator>
    );
}
