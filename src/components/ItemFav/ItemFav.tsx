import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../models/Product';
import { flex, GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';
import { Colors } from '../../utils/Colors';
import { FavsContext } from '../../context/favs-context';

interface IItemFavProps {
    product: Product;
}
const ItemFav = ({ product }: IItemFavProps) => {
    const { addRemoveProduct } = useContext(FavsContext);
    return (
        <View style={styles.container}>
            <View style={[GlobalStyles.row, flex(1), GlobalStyles.justBtw]}>
                <Image testID='image' resizeMode='center' style={styles.image} source={{ uri: product.image }} />
                <Text style={styles.title}>{product.name}</Text>
                <TouchableOpacity
                    testID='btn-fav'
                    activeOpacity={0.7}
                    onPress={() => addRemoveProduct(product)}
                    style={styles.button}>
                    <Icon testID='icon-heart' size={20} name='heart' color={Colors.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemFav;
