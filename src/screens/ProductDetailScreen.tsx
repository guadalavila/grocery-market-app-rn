import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Container from '../components/Container/Container';
import DetailProduct from '../components/DetailProduct/DetailProduct';
import Header from '../components/Header/Header';
import { flex } from '../utils/GlobalStyles';

const ProductDetailScreen = () => {
    return (
        <Container>
            <View style={flex(1)}>
                <Header text='' backButton />
                <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/banana.png')} />
            </View>
            <View style={styles.detail}>
                <DetailProduct />
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
