import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import Banner from '../components/Banner/Banner';
import HeaderAvatar from '../components/HeaderAvatar/HeaderAvatar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import SearchBar from '../components/SearchBar/SearchBar';
import Title from '../components/Title/Title';
import data from '../mock/data.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../navigation/types';
import { GlobalStyles } from '../utils/GlobalStyles';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'HomeScreen'> {}

const HomeScreen = ({ navigation }: Props) => {
    return (
        <ScrollView style={GlobalStyles.main} showsVerticalScrollIndicator={false}>
            <HeaderAvatar />
            <SearchBar />
            <Banner smallText='Get Up To' bigText='10% OFF' />
            <Title label='Frutas' textRight='Ver Más' onPress={() => {}} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.fruits}
                renderItem={({ item }) => (
                    <ItemProduct product={item} onPress={() => navigation.navigate('ProductDetailScreen')} />
                )}
                keyExtractor={(item) => item.id}
            />
            <Title label='Verduras' textRight='Ver Más' onPress={() => {}} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.vegetables}
                renderItem={({ item }) => (
                    <ItemProduct product={item} onPress={() => navigation.navigate('ProductDetailScreen')} />
                )}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    );
};

export default HomeScreen;
