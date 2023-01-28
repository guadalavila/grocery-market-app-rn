import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, FlatList } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';
import ItemCart from '../components/ItemCart/ItemCart';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import { CartContext } from '../context/cart-context';
import ItemEmpty from '../components/ItemEmpty/ItemEmpty';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'CartScreen'> {}

const CartScreen = ({ navigation }: Props) => {
    const { deleteCart, cart } = useContext(CartContext);
    return (
        <Container>
            <Header text={Strings.cart.label} backButton iconRight='trash-bin' onPressButtonRight={deleteCart} />
            {cart.length > 0 ? (
                <>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cart}
                        renderItem={({ item }) => <ItemCart product={item} />}
                        keyExtractor={(item) => item.id}
                    />
                    <ButtonPrimary
                        label={Strings.cart.checkout}
                        onPress={() => navigation.navigate('CheckoutScreen')}
                        style={styles.button}
                    />
                </>
            ) : (
                <ItemEmpty icon='cart-outline' message={Strings.cart.empty} />
            )}
        </Container>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
});
