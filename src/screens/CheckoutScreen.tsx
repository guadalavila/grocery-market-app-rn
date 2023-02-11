import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';
import Subtotal from '../components/Subtotal/Subtotal';
import { CartContext } from '../context/cart-context';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import ItemCurrentAddress from '../components/ItemCurrentAddress/ItemCurrentAddress';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'CheckoutScreen'> {}

const CheckoutScreen = ({ navigation }: Props) => {
    const { total, cart } = useContext(CartContext);

    return (
        <Container>
            <Header text={Strings.cart.checkout} backButton />
            <ItemCurrentAddress addNewAddress={() => navigation.navigate('AddAddressScreen')} />
            <Subtotal total={total} />
            <ButtonPrimary label={Strings.cart.checkout} onPress={() => navigation.navigate('CheckoutScreen')} />
        </Container>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
