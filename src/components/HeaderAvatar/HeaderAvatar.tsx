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
            <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.containerCart}>
                <Icon name='cart' size={22} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderAvatar;
