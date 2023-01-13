import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadowCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
    },
    justBtw: {
        justifyContent: 'space-between',
    },
});

export const Sizes = {
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 30,
    XXL: 40,
    XXXL: 55,
};
