import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { flex, GlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './styles';
import { Colors } from '../../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const DetailProduct = () => {
    return (
        <View style={flex(1)}>
            <View style={flex(5)}>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <View style={[GlobalStyles.row, GlobalStyles.justBtw, styles.buttons]}>
                        <View style={styles.containerPrice}>
                            <Text style={styles.priceText}>$ 220,33</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {}} style={styles.containerFav}>
                            <Icon size={22} name='heart' color={Colors.red} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.header}>Bananas Organicas</Text>
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
                <ButtonPrimary label='Agregar al Carrito' onPress={() => {}} />
            </View>
        </View>
    );
};

export default DetailProduct;
