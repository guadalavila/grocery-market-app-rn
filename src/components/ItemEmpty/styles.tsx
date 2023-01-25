import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes, FontSize } from '../../utils/GlobalStyles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: FontSize.XXL,
        color: Colors.grey,
        marginHorizontal: Sizes.L,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    containerIcon: {
        alignSelf: 'center',
        marginBottom: Sizes.XL,
    },
});
