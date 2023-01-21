import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { Strings } from '../../utils/Strings';
import { styles } from './styles';

interface IHeaderAvatarProps {
    onPress: () => void;
}

const HeaderAvatar = ({ onPress }: IHeaderAvatarProps) => {
    return (
        <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.container]}>
            <Text style={styles.title}>{Strings.appName}</Text>
            <TouchableOpacity testID='button' activeOpacity={0.7} onPress={onPress} style={styles.containerCart}>
                <View style={styles.containerBadge}>
                    <Text style={styles.badge}>4</Text>
                </View>
                <Icon testID='icon-cart' name='cart' size={22} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderAvatar;
