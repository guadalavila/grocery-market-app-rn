import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../utils/Colors';
import { GlobalStyles, Sizes } from '../../utils/GlobalStyles';
import { Strings } from '../../utils/Strings';
import Box from '../Box/Box';
import Divider from '../Divider/Divider';
import { styles } from './styles';

interface ISubtotalProps {
    total: number;
}

const Subtotal = ({ total }: ISubtotalProps) => {
    return (
        <View style={styles.container}>
            <Box mb={Sizes.S} flexDirection='row' justifyContent='space-between'>
                <Text style={styles.subtitle}>{Strings.subtotal}</Text>
                <Text testID='subtotal'>${total}.00</Text>
            </Box>
            <Box mb={Sizes.S} flexDirection='row' justifyContent='space-between'>
                <Text style={styles.subtitle}>{Strings.delivery}</Text>
                <Text>$10.00</Text>
            </Box>
            <Divider height={0.2} color={Colors.greyLight} marginHorizontal={0} />
            <Box mb={Sizes.S} mt={Sizes.S} flexDirection={'row'} justifyContent={'space-between'}>
                <Text style={styles.title}>{Strings.total}</Text>
                <Text testID='total' style={[GlobalStyles.center, styles.total]}>
                    ${total + 10}.00
                </Text>
            </Box>
        </View>
    );
};

export default Subtotal;
