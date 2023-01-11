import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
    },
    text: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 18,
        alignSelf: 'center',
    },
});
