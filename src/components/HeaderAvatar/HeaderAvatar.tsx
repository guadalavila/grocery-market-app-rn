import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../../context/cart-context';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { Strings } from '../../utils/Strings';
import { styles } from './styles';

interface IHeaderAvatarProps {
    onPress: () => void;
}

const HeaderAvatar = ({ onPress }: IHeaderAvatarProps) => {
    const { cart } = useContext(CartContext);
    const navigation = useNavigation();
    return (
        <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.container]}>
            <TouchableOpacity
                testID='menu'
                activeOpacity={0.7}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={styles.containerMenu}>
                <Icon testID='icon-menu' name='menu' size={28} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={styles.title}>{Strings.appName}</Text>
            <TouchableOpacity testID='button' activeOpacity={0.7} onPress={onPress} style={styles.containerCart}>
                <View style={styles.containerBadge}>
                    <Text style={styles.badge}>{cart?.length}</Text>
                </View>
                <Icon testID='icon-cart' name='cart' size={22} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderAvatar;
