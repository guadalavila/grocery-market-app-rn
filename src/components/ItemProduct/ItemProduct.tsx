import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../models/Product';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

interface IItemProductProps {
    product: Product;
    onPress: () => void;
}

const ItemProduct = ({ product: { name, description, price }, onPress }: IItemProductProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode={'contain'} source={require('../../../assets/images/banana.png')} />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{description}</Text>
            <View style={[GlobalStyles.row, GlobalStyles.justBtw]}>
                <Text style={styles.price}>${price}</Text>
                <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.7}>
                    <Text style={styles.price}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemProduct;
