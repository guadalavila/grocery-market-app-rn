import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IButtonPrimaryProps {
    label: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    testID?: string;
}

const ButtonPrimary = ({ label, onPress, style = {}, testID }: IButtonPrimaryProps) => {
    return (
        <TouchableOpacity testID={testID} activeOpacity={0.7} style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
