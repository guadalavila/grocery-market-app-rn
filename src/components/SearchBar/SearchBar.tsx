import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../utils/Strings';
import { styles } from './styles';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{Strings.search}</Text>
        </View>
    );
};

export default SearchBar;
