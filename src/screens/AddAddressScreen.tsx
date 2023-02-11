import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'AddAddressScreen'> {}

const AddAddressScreen = ({}: Props) => {
    return (
        <Container>
            <Header text={Strings.address.label} backButton />
            <Text>AddAddressScreen</Text>
        </Container>
    );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
