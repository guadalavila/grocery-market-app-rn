import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

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
    M: 15,
    L: 18,
    XL: 22,
    XXL: 26,
    XXXL: 32,
};

export const TextStyle = StyleSheet.create({
    h1: {
        fontSize: FontSize.XXXL,
        fontWeight: '900',
        color: Colors.black,
    },
    h2: {
        fontSize: FontSize.XXL,
        fontWeight: '700',
        color: Colors.black,
    },
    h3: {
        fontSize: FontSize.XL,
        fontWeight: '500',
        color: Colors.black,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.grey400,
    },
});

export const mt = (x: number) => {
    return {
        marginTop: x,
    };
};
export const mb = (x: number) => {
    return {
        marginBottom: x,
    };
};

export const mv = (x: number) => {
    return {
        marginVertical: x,
    };
};

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
    center: {
        alignSelf: 'center',
    },
    title: {
        color: Colors.black,
        fontSize: FontSize.L,
        fontWeight: '900',
        marginBottom: Sizes.S,
        marginHorizontal: Sizes.L,
    },
    containerWhite: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.S,
        paddingHorizontal: Sizes.M,
        padding: Sizes.S,
        marginTop: Sizes.S,
        marginBottom: Sizes.L,
        marginHorizontal: Sizes.L,
    },
});
