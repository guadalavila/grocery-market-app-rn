import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { FontSize, Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    divider: {
        width: 70,
        height: 8,
        backgroundColor: Colors.divider,
        borderRadius: 20,
        marginVertical: Sizes.M,
        alignSelf: 'center',
    },
    container: {
        marginHorizontal: Sizes.L,
    },
    header: {
        fontSize: FontSize.XXL,
        color: Colors.black,
        fontWeight: 'bold',
    },
    containerDesc: {
        marginVertical: Sizes.M,
    },
    descText: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.grey,
    },
    containerPrice: {
        backgroundColor: Colors.greenLight,
        borderRadius: 20,
        padding: 10,
        alignSelf: 'center',
    },
    priceText: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    containerFav: {
        backgroundColor: Colors.redLight,
        borderRadius: 20,
        padding: 10,
    },
    buttons: {
        marginBottom: Sizes.M,
    },
});
