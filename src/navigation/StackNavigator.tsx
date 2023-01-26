import React, { useContext } from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FruitsScreen from '../screens/FruitsScreen';
import VegetablesScreen from '../screens/VegetablesScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import { UtilContext } from '../context/util-context';
import Toast from '../components/Toast/Toast';

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
    const { messageToast, showToast } = useContext(UtilContext);

    return (
        <>
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
                <StackLoggedIn.Screen name={'CartScreen'} component={CartScreen} />
                <StackLoggedIn.Screen name={'CheckoutScreen'} component={CheckoutScreen} />
            </StackLoggedIn.Navigator>
            {showToast && <Toast message={messageToast} position={'top'} />}
        </>
    );
}
