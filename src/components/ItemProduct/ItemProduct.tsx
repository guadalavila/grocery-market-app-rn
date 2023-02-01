import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../../context/cart-context';
import { UtilContext } from '../../context/util-context';
import { Product } from '../../models/Product';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { Strings } from '../../utils/Strings';
import { styles } from './styles';

interface IItemProductProps {
    product: Product;
    onPress: () => void;
}

const ItemProduct = ({ product, onPress }: IItemProductProps) => {
    const { addProductToCart } = useContext(CartContext);
    const { setMessageToast, setShowToast } = useContext(UtilContext);

    const addProduct = () => {
        addProductToCart({ product, quantity: 1 });
        setShowToast(true);
        setMessageToast(Strings.addedProduct);
    };

    return (
        <TouchableOpacity testID='button' style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Image testID='image' style={styles.image} resizeMode={'contain'} source={{ uri: product.image }} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.subtitle}>{product.description}</Text>
            <View style={[GlobalStyles.row, GlobalStyles.justBtw]}>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity testID='button-add' style={styles.buttonAdd} activeOpacity={0.7} onPress={addProduct}>
                    <Icon testID='icon-add' name='add' size={22} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ItemProduct;
