import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Strings } from '../../utils/Strings';
import { Sizes, TextStyle } from '../../utils/GlobalStyles';
import Box from '../Box/Box';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_ITEMS } from '../../utils/Constants';

const DrawerMenu = ({ navigation }: any) => {
    return (
        <DrawerContentScrollView style={styles.menu}>
            <Box mb={40} ph={Sizes.M}>
                <Text style={TextStyle.h1}>{Strings.welcome}</Text>
            </Box>
            {MENU_ITEMS.map(({ label, screen }) => (
                <TouchableOpacity
                    key={label}
                    style={styles.itemMenu}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate(screen)}>
                    <Box flexDirection={'row'} justifyContent='space-between'>
                        <Text style={TextStyle.label}>{label}</Text>
                        <Icon name='chevron-forward-outline' size={20} />
                    </Box>
                </TouchableOpacity>
            ))}
        </DrawerContentScrollView>
    );
};

export default DrawerMenu;
