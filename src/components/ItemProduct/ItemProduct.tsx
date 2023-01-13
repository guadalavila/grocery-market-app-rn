import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../models/Product';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';

interface IItemProductProps {
    product: Product;
    onPress: () => void;
}

const ItemProduct = ({ product: { name, description, price }, onPress }: IItemProductProps) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Image style={styles.image} resizeMode={'contain'} source={require('../../../assets/images/banana.png')} />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{description}</Text>
            <View style={[GlobalStyles.row, GlobalStyles.justBtw]}>
                <Text style={styles.price}>${price}</Text>
                <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.7}>
                    <Icon name='add' size={22} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ItemProduct;
