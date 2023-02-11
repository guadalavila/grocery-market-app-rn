import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Address } from '../../models/Address';
import { Colors } from '../../utils/Colors';
import { GlobalStyles } from '../../utils/GlobalStyles';
import Box from '../Box/Box';
import { styles } from './styles';

interface IItemAddressProps {
    address: Address;
}

const ItemAddress = ({ address: { address, city, country, codePostal, selected } }: IItemAddressProps) => {
    return (
        <View style={GlobalStyles.containerWhite}>
            <Box flexDirection='row' justifyContent='space-between'>
                <Box>
                    <Text style={styles.addressText}>{address} </Text>
                    <Text style={styles.countryText}>
                        {city}, {country}
                    </Text>
                    <Text>{codePostal}</Text>
                </Box>
                {selected && (
                    <Box alignSelf='center' background={Colors.grey200} borderRadius={6}>
                        <Icon testID='icon-check' name='checkmark' size={26} color={Colors.primary} />
                    </Box>
                )}
            </Box>
        </View>
    );
};

export default ItemAddress;
