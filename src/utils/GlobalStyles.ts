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
    main: {
        backgroundColor: Colors.background,
    },
});

export const flex = (x: number) => {
    return {
        flex: x,
    };
};

export const Sizes = {
    XXS: 2,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 30,
    XXL: 40,
    XXXL: 55,
};

export const FontSize = {
    XS: 8,
    S: 10,
    M: 14,
    L: 18,
    XL: 22,
    XXL: 26,
    XXXL: 32,
};
