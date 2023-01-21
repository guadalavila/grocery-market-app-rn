import React from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FruitsScreen from '../screens/FruitsScreen';
import VegetablesScreen from '../screens/VegetablesScreen';

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
            <StackLoggedIn.Screen name={'DetailScreen'} component={DetailScreen} />
            <StackLoggedIn.Screen name={'ProductDetailScreen'} component={ProductDetailScreen} />
            <StackLoggedIn.Screen name={'FruitsScreen'} component={FruitsScreen} />
            <StackLoggedIn.Screen name={'VegetablesScreen'} component={VegetablesScreen} />
        </StackLoggedIn.Navigator>
    );
}
