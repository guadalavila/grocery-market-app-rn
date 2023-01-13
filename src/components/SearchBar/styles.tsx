import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyUltraLight,
        marginHorizontal: Sizes.M,
        paddingHorizontal: Sizes.S,
        paddingVertical: Sizes.M,
        marginVertical: Sizes.S,
        borderRadius: Sizes.M,
    },
    text: {
        color: '#9C9797',
        fontWeight: '600',
    },
});
