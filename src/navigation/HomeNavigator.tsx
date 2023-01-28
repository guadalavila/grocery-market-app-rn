import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FruitsScreen from '../screens/FruitsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import VegetablesScreen from '../screens/VegetablesScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const StackHome = createStackNavigator<HomeStackParamList>();
const HomeNavigator = () => {
    return (
        <StackHome.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}>
            <StackHome.Screen name={'HomeScreen'} component={HomeScreen} />
            <StackHome.Screen name={'DetailScreen'} component={DetailScreen} />
            <StackHome.Screen name={'FruitsScreen'} component={FruitsScreen} />
            <StackHome.Screen name={'ProductDetailScreen'} component={ProductDetailScreen} />
            <StackHome.Screen name={'VegetablesScreen'} component={VegetablesScreen} />
            <StackHome.Screen name={'CartScreen'} component={CartScreen} />
            <StackHome.Screen name={'CheckoutScreen'} component={CheckoutScreen} />
            <StackHome.Screen name={'FavoritesScreen'} component={FavoritesScreen} />
        </StackHome.Navigator>
    );
};

export default HomeNavigator;
