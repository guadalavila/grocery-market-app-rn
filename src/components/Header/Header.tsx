import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { styles } from './styles';

interface IHeaderProps {
    text: string;
    backButton: boolean;
}

const Header = ({ text, backButton }: IHeaderProps) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                {backButton && (
                    <TouchableOpacity testID='back-button' activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Icon testID='icon' name='chevron-back-outline' size={32} color={Colors.black} />
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default Header;
