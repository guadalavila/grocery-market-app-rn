import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartItem } from '../../models/CartItem';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

interface IItemCartProps {
    item: CartItem;
    onPressClose: () => void;
}

const ItemCart = ({ item: { product, quantity }, onPressClose }: IItemCartProps) => {
    return (
        <View style={styles.container}>
            <Image testID='image' resizeMode='center' style={styles.image} source={{ uri: product.image }} />
            <View style={styles.containerDescription}>
                <View style={[GlobalStyles.row, GlobalStyles.justBtw]}>
                    <Text style={styles.title}>{product.name}</Text>
                    <TouchableOpacity testID='close-button' activeOpacity={0.7} onPress={onPressClose}>
                        <Icon testID='icon-close' name='close' size={24} />
                    </TouchableOpacity>
                </View>
                <Text>
                    {quantity} {quantity === 1 ? 'unidad' : 'unidades'}
                </Text>
                <Text style={styles.price}>${product.price}.00</Text>
            </View>
        </View>
    );
};

export default ItemCart;
