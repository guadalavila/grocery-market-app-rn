import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../navigation/types';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'CartScreen'> {}

const CartScreen = () => {
    return (
        <View>
            <Text>CartScreen</Text>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
