import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../navigation/types';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VegetablesScreen'> {}

const VegetablesScreen = () => {
    return (
        <View>
            <Text>VegetablesScreen</Text>
        </View>
    );
};

export default VegetablesScreen;

const styles = StyleSheet.create({});
