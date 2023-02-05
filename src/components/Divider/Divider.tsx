import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/GlobalStyles';

interface IDividerProps {
    color?: string;
    height?: number;
    style?: StyleProp<ViewStyle>;
    marginVertical?: number;
    marginHorizontal?: number;
}

const Divider = ({
    color = Colors.greyLight,
    height = 1.5,
    style = {},
    marginHorizontal = Sizes.S,
    marginVertical = Sizes.M,
}: IDividerProps) => {
    return (
        <View
            style={[
                styles.container,
                style,
                {
                    height: height,
                    backgroundColor: color,
                    marginHorizontal: marginHorizontal,
                    marginVertical: marginVertical,
                },
            ]}
        />
    );
};

export default Divider;

const styles = StyleSheet.create({
    container: {},
});
