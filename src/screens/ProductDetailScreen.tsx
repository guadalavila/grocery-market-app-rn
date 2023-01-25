import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, StyleSheet, View } from 'react-native';
import Container from '../components/Container/Container';
import DetailProduct from '../components/DetailProduct/DetailProduct';
import Header from '../components/Header/Header';
import { RootStackLoginParamList } from '../navigation/types';
import { flex } from '../utils/GlobalStyles';
import { CartContext } from '../context/cart-context';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ProductDetailScreen'> {}

const ProductDetailScreen = ({ navigation, route }: Props) => {
    const product = route.params.item;
    const { addProductToCart } = useContext(CartContext);

    return (
        <Container>
            <View style={flex(1)}>
                <Header text='' backButton />
                <Image style={styles.image} resizeMode='contain' source={{ uri: product.image }} />
            </View>
            <View style={styles.detail}>
                <DetailProduct product={product} onPress={() => addProductToCart(product)} />
            </View>
        </Container>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: '70%',
        alignSelf: 'center',
    },
    detail: {
        backgroundColor: 'white',
        flex: 2,
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
    },
});
