import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

interface ITitleProps {
    label: string;
    textRight: string;
    onPress: () => void;
}
const Title = ({ label, textRight, onPress }: ITitleProps) => {
    return (
        <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.container]}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity testID='button' activeOpacity={0.7} onPress={onPress}>
                <Text style={styles.textRight}>{textRight}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Title;
