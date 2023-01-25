import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { flex, GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';
import { Colors } from '../../utils/Colors';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { Product } from '../../models/Product';
import { Strings } from '../../utils/Strings';

interface IDetailProductProps {
    product: Product;
    onPress: () => void;
}

const DetailProduct = ({ product: { name, description, price }, onPress }: IDetailProductProps) => {
    return (
        <View style={flex(1)}>
            <View style={flex(5)}>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.buttons]}>
                        <View style={styles.containerPrice}>
                            <Text style={styles.priceText}>$ {price}.00</Text>
                        </View>
                        <TouchableOpacity
                            testID='button-heart'
                            activeOpacity={0.7}
                            onPress={() => {}}
                            style={styles.containerFav}>
                            <Icon testID='icon-heart' size={22} name='heart' color={Colors.red} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.header}>{name}</Text>
                    <View style={styles.containerDesc}>
                        <Text style={styles.descText}>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={flex(1)}>
                <ButtonPrimary testID='button-add-to-cart' label={Strings.cart.add} onPress={onPress} />
            </View>
        </View>
    );
};

export default DetailProduct;
