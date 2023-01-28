import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import Banner from '../components/Banner/Banner';
import HeaderAvatar from '../components/HeaderAvatar/HeaderAvatar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import SearchBar from '../components/SearchBar/SearchBar';
import Title from '../components/Title/Title';
import data from '../mock/data.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import { GlobalStyles } from '../utils/GlobalStyles';
import { Strings } from '../utils/Strings';
import Container from '../components/Container/Container';
import { Colors } from '../utils/Colors';
import useRemoteConfig from '../hooks/useRemoteConfig';
import useFavorite from '../hooks/useFavorite';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'HomeScreen'> {}

const HomeScreen = ({ navigation }: Props) => {
    const { smallText, bigText } = useRemoteConfig();
    useFavorite();
    return (
        <Container background={Colors.white}>
            <HeaderAvatar onPress={() => navigation.navigate('CartScreen')} />
            <ScrollView style={GlobalStyles.main} showsVerticalScrollIndicator={false}>
                <SearchBar />
                {smallText && bigText && <Banner smallText={smallText} bigText={bigText} />}
                <Title
                    label={Strings.fruits.label}
                    textRight={Strings.viewMore}
                    onPress={() => navigation.navigate('FruitsScreen')}
                />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data.fruits}
                    renderItem={({ item }) => (
                        <ItemProduct
                            product={item}
                            onPress={() => navigation.navigate('ProductDetailScreen', { item })}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
                <Title
                    label={Strings.vegetables.label}
                    textRight={Strings.viewMore}
                    onPress={() => navigation.navigate('VegetablesScreen')}
                />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data.vegetables}
                    renderItem={({ item }) => (
                        <ItemProduct
                            product={item}
                            onPress={() => navigation.navigate('ProductDetailScreen', { item })}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;
