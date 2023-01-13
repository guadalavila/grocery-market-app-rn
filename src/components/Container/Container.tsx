import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    return (
        <>
            <View style={styles.container}>{children}</View>
        </>
    );
};

export default Container;
