import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface IBannerProps {
    smallText: string;
    bigText: string;
}

const Banner = ({ smallText, bigText }: IBannerProps) => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.smalText}>{smallText}</Text>
            <Text style={styles.bigText}>{bigText}</Text>
            <Image
                testID='image'
                style={styles.image}
                resizeMode='center'
                source={require('../../../assets/images/carrot.png')}
            />
        </View>
    );
};

export default Banner;
