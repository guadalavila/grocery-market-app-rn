import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { styles } from './styles';

interface IItemEmptyProps {
    icon: string;
    message: string;
}

const ItemEmpty = ({ icon, message }: IItemEmptyProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon testID='icon' name={icon} size={130} color={Colors.greyLight} />
            </View>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

export default ItemEmpty;
