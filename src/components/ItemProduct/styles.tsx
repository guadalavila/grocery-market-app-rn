import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { GlobalStyles, Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.S,
        alignContent: 'center',
        paddingHorizontal: Sizes.L,
        paddingBottom: Sizes.M,
        marginVertical: Sizes.S,
        marginHorizontal: Sizes.M,
        ...GlobalStyles.shadowCard,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.black,
        marginBottom: Sizes.XS,
    },
    subtitle: {
        color: Colors.greyLight,
        marginBottom: Sizes.XS,
    },
    price: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
    },
    buttonAdd: {
        backgroundColor: Colors.primary,
        borderRadius: Sizes.S,
        paddingHorizontal: Sizes.M,
        paddingVertical: Sizes.S,
    },
    image: {
        width: 100,
        height: 110,
        alignSelf: 'center',
    },
});
