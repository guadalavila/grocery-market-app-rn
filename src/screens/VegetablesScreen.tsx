import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { HomeStackParamList } from '../navigation/types';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'VegetablesScreen'> {}

const VegetablesScreen = () => {
    return (
        <View>
            <Text>VegetablesScreen</Text>
        </View>
    );
};

export default VegetablesScreen;

const styles = StyleSheet.create({});
