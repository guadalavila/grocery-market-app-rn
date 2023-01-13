import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Buscar...</Text>
        </View>
    );
};

export default SearchBar;
