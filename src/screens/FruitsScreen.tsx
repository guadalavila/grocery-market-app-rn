import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../navigation/types';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'FruitsScreen'> {}

const FruitsScreen = () => {
    return (
        <View>
            <Text>FruitsScreen</Text>
        </View>
    );
};

export default FruitsScreen;

const styles = StyleSheet.create({});
