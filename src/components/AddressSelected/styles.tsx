import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { FontSize, Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    address: {
        fontWeight: 'bold',
        fontSize: FontSize.M,
        color: Colors.black,
        alignSelf: 'center',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.L,
        paddingVertical: Sizes.S,
        marginVertical: Sizes.S,
        backgroundColor: Colors.white,
    },
});
