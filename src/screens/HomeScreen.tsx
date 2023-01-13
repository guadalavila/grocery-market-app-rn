import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Banner from '../components/Banner/Banner';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Title from '../components/Title/Title';
import data from '../mock/data.json';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Banner smallText='Get Up To' bigText='10% OFF' />
            <Title label='Frutas' textRight='Ver Más' onPress={() => {}} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.fruits}
                renderItem={({ item }) => <ItemProduct product={item} onPress={() => {}} />}
                keyExtractor={(item) => item.id}
            />
            <Title label='Verduras' textRight='Ver Más' onPress={() => {}} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.vegetables}
                renderItem={({ item }) => <ItemProduct product={item} onPress={() => {}} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
