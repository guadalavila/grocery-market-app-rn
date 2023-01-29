import React, { useContext } from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { UtilContext } from '../context/util-context';
import Toast from '../components/Toast/Toast';
import DrawerNavigator from './DrawerNavigator';

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
                initialRouteName={'DrawerNavigator'}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}>
                <StackLoggedIn.Screen
                    name={'DrawerNavigator'}
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
            </StackLoggedIn.Navigator>
            {showToast && <Toast message={messageToast} position={'top'} />}
        </>
    );
}
