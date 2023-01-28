import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigation/StackNavigator';

const MainAppContainer = () => {
    return <NavigationContainer>{true ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}</NavigationContainer>;
};

export default MainAppContainer;
