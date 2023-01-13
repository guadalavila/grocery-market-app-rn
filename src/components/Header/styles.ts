import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: Sizes.M,
        flexDirection: 'row',
        paddingHorizontal: Sizes.S,
    },
    containerIcon: {
        width: '20%',
    },
    text: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 20,
        alignSelf: 'center',
        width: '60%',
        textAlign: 'center',
    },
});
