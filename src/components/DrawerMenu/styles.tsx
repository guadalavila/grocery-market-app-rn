import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    menu: {
        paddingVertical: Sizes.L,
        backgroundColor: Colors.greyUltraLight,
    },
    itemMenu: {
        backgroundColor: Colors.white,
        paddingVertical: Sizes.S,
        paddingHorizontal: Sizes.M,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
});
