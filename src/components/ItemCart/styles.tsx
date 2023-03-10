import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { FontSize, Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.S,
        paddingHorizontal: Sizes.L,
        padding: Sizes.S,
        marginVertical: Sizes.XS,
        marginHorizontal: Sizes.L,
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 50,
        alignSelf: 'center',
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
        textAlign: 'right',
        fontSize: FontSize.M,
        color: Colors.black,
        fontWeight: '900',
    },
});
