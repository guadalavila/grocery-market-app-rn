import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: Sizes.M,
        backgroundColor: Colors.primaryLight,
        marginVertical: Sizes.M,
        borderRadius: Sizes.L,
        paddingHorizontal: Sizes.M,
        height: 120,
    },
    image: {
        height: 100,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    smalText: {
        marginTop: Sizes.L,
        fontSize: 20,
        color: Colors.green,
        fontWeight: '500',
        marginLeft: Sizes.L,
    },
    bigText: {
        fontSize: 38,
        color: Colors.green,
        fontWeight: '900',
        textAlign: 'center',
    },
});
