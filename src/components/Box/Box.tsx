import React from 'react';
import { View } from 'react-native';

interface IBoxProps {
    children: React.ReactNode;
    m?: number;
    mt?: number;
    mb?: number;
    mv?: number;
    mh?: number;
    p?: number;
    pt?: number;
    pb?: number;
    ph?: number;
    pv?: number;
    background?: string;
    display?: 'flex' | 'none' | undefined;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | undefined;
    flex?: number | undefined;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
}

const Box = ({
    children,
    m = 0,
    mt = 0,
    mb = 0,
    mv = 0,
    mh = 0,
    p = 0,
    pt = 0,
    pb = 0,
    pv = 0,
    ph = 0,
    background = 'transparent',
    display,
    justifyContent,
    flex,
    flexDirection,
}: IBoxProps) => {
    return (
        <View
            style={{
                margin: m,
                padding: p,
                marginVertical: mv,
                marginHorizontal: mh,
                marginTop: mt,
                marginBottom: mb,
                paddingVertical: pv,
                paddingHorizontal: ph,
                paddingTop: pt,
                paddingBottom: pb,
                backgroundColor: background,
                display: display,
                justifyContent: justifyContent,
                flex: flex,
                flexDirection: flexDirection,
            }}>
            {children}
        </View>
    );
};

export default Box;
