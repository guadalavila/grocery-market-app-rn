import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { Strings } from '../../utils/Strings';
import Box from '../Box/Box';
import { styles } from './styles';

interface IItemCurrentAddressProps {
    addNewAddress?: () => void;
}

const ItemCurrentAddress = ({ addNewAddress }: IItemCurrentAddressProps) => {
    return (
        <>
            <Text style={GlobalStyles.title}>{Strings.sendTo}</Text>
            <View style={styles.container}>
                <Box flexDirection='row' justifyContent='space-between'>
                    <Box>
                        <Text style={styles.addressText}>España 140 </Text>
                        <Text style={styles.countryText}>Salta, Argentina</Text>
                        <Text>4400</Text>
                    </Box>
                    {addNewAddress && (
                        <TouchableOpacity style={styles.buttonChange} activeOpacity={0.7} onPress={addNewAddress}>
                            <Text style={styles.changeText}>{Strings.change}</Text>
                        </TouchableOpacity>
                    )}
                </Box>
            </View>
        </>
    );
};

export default ItemCurrentAddress;
