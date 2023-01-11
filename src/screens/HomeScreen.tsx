import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <ButtonPrimary label='Ir a detalle' onPress={() => navigation.navigate('DetailScreen')} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
