import React from 'react';
import { Image, Text, View } from 'react-native';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

const HeaderAvatar = () => {
    return (
        <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.container]}>
            <Text style={styles.title}>Grocery</Text>
            <Image source={require('../../../assets/images/user.png')} />
        </View>
    );
};

export default HeaderAvatar;
