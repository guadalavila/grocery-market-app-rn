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
});
