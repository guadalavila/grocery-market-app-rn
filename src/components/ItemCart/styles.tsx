import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.S,
        paddingHorizontal: Sizes.L,
        padding: Sizes.M,
        marginVertical: Sizes.S,
        marginHorizontal: Sizes.L,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 70,
    },
    containerDescription: {
        paddingLeft: Sizes.M,
        flex: 1,
    },
    title: {
        fontWeight: '900',
        fontSize: 16,
        color: Colors.black,
    },
    price: {
        paddingTop: Sizes.M,
        textAlign: 'right',
        fontSize: 18,
        color: Colors.black,
        fontWeight: '900',
    },
});
