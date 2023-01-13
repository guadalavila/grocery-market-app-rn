import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Icon name='chevron-back-outline' size={32} color={Colors.grey} />
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default Header;
