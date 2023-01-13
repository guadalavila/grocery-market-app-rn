import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface IButtonPrimaryProps {
    label: string;
    onPress: () => void;
}

const ButtonPrimary = ({ label, onPress }: IButtonPrimaryProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
