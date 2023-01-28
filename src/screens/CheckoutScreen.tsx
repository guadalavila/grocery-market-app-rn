import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'CheckoutScreen'> {}

const CheckoutScreen = () => {
    return (
        <Container>
            <Header text={Strings.cart.checkout} backButton />
            <Text>CheckoutScreen</Text>
        </Container>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
