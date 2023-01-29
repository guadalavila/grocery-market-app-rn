import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Strings } from '../../utils/Strings';
import { Sizes, TextStyle } from '../../utils/GlobalStyles';
import Box from '../Box/Box';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerMenu = ({ navigation }: any) => {
    return (
        <DrawerContentScrollView style={styles.menu}>
            <Box mb={40} ph={Sizes.M}>
                <Text style={TextStyle.h1}>{Strings.welcome}</Text>
            </Box>
            <TouchableOpacity
                style={styles.itemMenu}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('FavoritesScreen')}>
                <Box flexDirection={'row'} justifyContent='space-between'>
                    <Text style={TextStyle.label}>{Strings.favorites.label}</Text>
                    <Icon name='chevron-forward-outline' size={20} />
                </Box>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemMenu}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AddressScreen')}>
                <Box flexDirection={'row'} justifyContent='space-between'>
                    <Text style={TextStyle.label}>{Strings.address.label}</Text>
                    <Icon name='chevron-forward-outline' size={20} />
                </Box>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemMenu}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('OrdersScreen')}>
                <Box flexDirection={'row'} justifyContent='space-between'>
                    <Text style={TextStyle.label}>{Strings.orders.label}</Text>
                    <Icon name='chevron-forward-outline' size={20} />
                </Box>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

export default DrawerMenu;
