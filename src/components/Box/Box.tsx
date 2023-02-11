import React from 'react';
import { View } from 'react-native';

// enum SIZE {
//     'none' = 0,
//     'xxs' = 2,
//     'xs' = 4,
//     's' = 6,
//     'm' = 8,
//     'l' = 12,
//     'xl' = 16,
//     'xxl' = 22,
//     'xxxl' = 30,
// }

// type ColorKeys = keyof Colors_;
// type ValueOfFoo = ValueOf<Colors_>;

// export const colorLabels = {
//     green: 'Green',
//     red: 'Red',
//     blue: 'Blue',
//     transparent: 'transparent',
//     v: '#007cad',
// } as const;

// type ColorID = keyof typeof colorLabels;

// export const colorIDs = Object.keys(colorLabels) as ColorID[];
type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

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
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | undefined;
    alignItems?: FlexAlignType | undefined;
    alignSelf?: 'auto' | FlexAlignType | undefined;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | undefined;
    flex?: number | undefined;
    borderRadius?: number | undefined;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
}

const Box = ({
    children,
    m = 0,
    mb = 0,
    mt = 0,
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
    alignSelf,
    borderRadius,
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
                alignSelf: alignSelf,
                borderRadius: borderRadius,
            }}>
            {children}
        </View>
    );
};

export default Box;
