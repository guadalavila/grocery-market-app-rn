import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    divider: {
        width: 70,
        height: 8,
        backgroundColor: Colors.divider,
        borderRadius: 20,
        marginVertical: Sizes.M,
        alignSelf: 'center',
    },
});
