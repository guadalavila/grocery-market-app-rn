import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import ButtonPrimary from './src/components/ButtonPrimary';

const App = () => {
    return (
        <View>
            <Header text='Market' />
            <Text>App</Text>
            <ButtonPrimary label='Press me' onPress={() => {}} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({});
