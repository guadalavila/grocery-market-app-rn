import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Address } from '../../models/Address';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import Box from '../Box/Box';
import { styles } from './styles';

interface IItemAddressProps {
    address: Address;
    selected: boolean;
    onPress: () => void;
}

const ItemAddress = ({ address: { address, city, country, codePostal }, selected, onPress }: IItemAddressProps) => {
    return (
        <TouchableOpacity testID='button' style={GlobalStyles.containerWhite} activeOpacity={0.7} onPress={onPress}>
            <Box flexDirection='row' justifyContent='space-between'>
                <Box>
                    <Text style={styles.addressText}>{address} </Text>
                    <Text style={styles.countryText}>
                        {city}, {country}
                    </Text>
                    <Text>{codePostal}</Text>
                </Box>
                <Box alignSelf='center' background={Colors.grey200} borderRadius={6} width={30} height={30}>
                    {selected && (
                        <Icon
                            style={GlobalStyles.center}
                            testID='icon-check'
                            name='checkmark'
                            size={26}
                            color={Colors.primary}
                        />
                    )}
                </Box>
            </Box>
        </TouchableOpacity>
    );
};

export default ItemAddress;
