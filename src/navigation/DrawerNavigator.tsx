import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerStackParamList } from './types';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={(props) => <DrawerMenu {...props} />}
            initialRouteName={'HomeStack'}>
            <Drawer.Screen options={{ swipeEnabled: false }} name={'HomeStack'} component={HomeNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
