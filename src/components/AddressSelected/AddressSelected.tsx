import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import Box from '../Box/Box';
import Container from '../Container/Container';
import { styles } from './styles';

interface IAddrssSelectedProps {
    onPress: () => void;
}

const AddressSelected = ({ onPress }: IAddrssSelectedProps) => {
    return (
        <Container>
            <TouchableOpacity testID='button' style={styles.container} activeOpacity={0.7} onPress={onPress}>
                <Text style={styles.address}>Av. Santa Fé 1095 ...</Text>
                <Box alignSelf='center'>
                    <Icon testID='icon' name='chevron-down-outline' size={28} color={Colors.grey} />
                </Box>
            </TouchableOpacity>
        </Container>
    );
};

export default AddressSelected;
