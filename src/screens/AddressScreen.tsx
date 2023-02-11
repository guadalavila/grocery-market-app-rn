import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import ItemAddress from '../components/ItemAddress/ItemAddress';
import { Strings } from '../utils/Strings';
import data from '../mock/data.json';

const AddressScreen = () => {
    return (
        <Container>
            <Header text={Strings.address.label} backButton />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data.address}
                renderItem={({ item }) => <ItemAddress address={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};

export default AddressScreen;

const styles = StyleSheet.create({});
