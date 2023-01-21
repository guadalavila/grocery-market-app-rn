import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../models/Product';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

interface IItemCartProps {
    product: Product;
}

const ItemCart = ({ product: { image, name, price } }: IItemCartProps) => {
    return (
        <View style={styles.container}>
            <Image resizeMode='center' style={styles.image} source={{ uri: image }} />
            <View style={styles.containerDescription}>
                <View style={[GlobalStyles.row, GlobalStyles.justBtw]}>
                    <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                        <Icon name='close' size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>${price}.00</Text>
            </View>
        </View>
    );
};

export default ItemCart;
