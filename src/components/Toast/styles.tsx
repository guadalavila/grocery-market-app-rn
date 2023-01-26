import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { FontSize, Sizes } from '../../utils/GlobalStyles';
export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        width: '90%',
        backgroundColor: Colors.primary,
        alignSelf: 'center',
        borderRadius: Sizes.M,
        padding: Sizes.M,
    },
    top: {
        top: 20,
    },
    bottom: {
        bottom: 30,
    },
    text: {
        color: Colors.white,
        fontWeight: '500',
        fontSize: FontSize.L,
    },
});
