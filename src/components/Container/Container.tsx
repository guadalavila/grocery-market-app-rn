import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../utils/Colors';
import { styles } from './styles';

interface IContainerProps {
    children: React.ReactNode;
    background?: string;
}

const Container = ({ children, background = Colors.greyUltraLight }: IContainerProps) => {
    return (
        <>
            <View style={[styles.container, { backgroundColor: background }]}>{children}</View>
        </>
    );
};

export default Container;
