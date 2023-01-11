import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface IHeaderProps {
    text: string;
}

const Header = ({ text }: IHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default Header;
