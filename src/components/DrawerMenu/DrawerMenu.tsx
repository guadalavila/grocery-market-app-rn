import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Strings } from '../../utils/Strings';

const DrawerMenu = ({ navigation }: any) => {
    return (
        <DrawerContentScrollView>
            <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => navigation.navigate('CartScreen')}>
                <Text>{Strings.cart.label}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('FavoritesScreen')}>
                <Text>{Strings.favorites.label}</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

export default DrawerMenu;
