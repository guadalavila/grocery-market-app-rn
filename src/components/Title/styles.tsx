import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: Sizes.M,
        paddingHorizontal: Sizes.XS,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.black,
    },
    textRight: {
        color: Colors.primary,
        fontWeight: '600',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});
