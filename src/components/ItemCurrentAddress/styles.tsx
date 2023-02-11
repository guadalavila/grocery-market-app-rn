import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { FontSize, Sizes } from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: Sizes.S,
        paddingHorizontal: Sizes.M,
        padding: Sizes.S,
        marginTop: Sizes.S,
        marginBottom: Sizes.L,
        marginHorizontal: Sizes.L,
    },
    changeText: {
        color: Colors.primary,
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
    buttonChange: {
        alignSelf: 'center',
    },
    addressText: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: FontSize.L,
    },
    countryText: {
        color: Colors.black,
        fontSize: FontSize.M,
    },
});
