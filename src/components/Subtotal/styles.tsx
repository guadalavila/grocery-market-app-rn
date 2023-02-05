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
    title: {
        fontSize: FontSize.L,
        color: Colors.black,
        fontWeight: '600',
    },
    total: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: FontSize.XL,
    },
    subtitle: {
        fontWeight: '600',
    },
});
