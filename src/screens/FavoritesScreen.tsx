import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'FavoritesScreen'> {}

const FavoritesScreen = ({}: Props) => {
    return (
        <Container>
            <Header text={Strings.favorites.label} backButton />
            <Text>FavoritesScreen</Text>
        </Container>
    );
};

export default FavoritesScreen;
