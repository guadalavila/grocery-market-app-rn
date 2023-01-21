import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IButtonPrimaryProps {
    label: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const ButtonPrimary = ({ label, onPress, style = {} }: IButtonPrimaryProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
