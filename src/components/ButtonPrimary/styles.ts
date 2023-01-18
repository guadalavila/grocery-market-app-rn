import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 12,
        marginHorizontal: 10,
        borderRadius: 12,
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});
