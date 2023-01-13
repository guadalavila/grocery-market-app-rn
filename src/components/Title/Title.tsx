import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Text style={styles.textRight}>{textRight}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Title;
