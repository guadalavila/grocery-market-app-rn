import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: Sizes.M,
        marginVertical: Sizes.L,
    },
    title: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 30,
    },
    containerCart: {
        alignSelf: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 20,
        padding: Sizes.S,
    },
    containerBadge: {
        backgroundColor: Colors.red,
        position: 'absolute',
        right: -6,
        top: -10,
        borderRadius: 18,
    },
    badge: {
        color: Colors.white,
        fontWeight: '600',
        paddingHorizontal: Sizes.XXS,
    },
});
