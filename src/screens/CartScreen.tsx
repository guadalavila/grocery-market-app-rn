import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, FlatList } from 'react-native';
import { RootStackLoginParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';
import data from '../mock/data.json';
import ItemCart from '../components/ItemCart/ItemCart';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'CartScreen'> {}

const CartScreen = () => {
    return (
        <Container>
            <Header text={Strings.cart} backButton />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data.fruits}
                renderItem={({ item }) => <ItemCart product={item} />}
                keyExtractor={(item) => item.id}
            />
            <ButtonPrimary label='sd' onPress={() => {}} style={styles.button} />
        </Container>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
});
