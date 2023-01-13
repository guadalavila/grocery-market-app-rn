import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        marginVertical: 8,
        marginHorizontal: 8,
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
