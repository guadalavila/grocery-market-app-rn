import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IButtonPrimaryProps {
    disabled?: boolean;
    label: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    testID?: string;
}

const ButtonPrimary = ({ label, onPress, disabled = false, style = {}, testID }: IButtonPrimaryProps) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            testID={testID}
            activeOpacity={0.7}
            style={[styles.container, style]}
            onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
