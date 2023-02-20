import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import ItemAddress from '../components/ItemAddress/ItemAddress';
import { Strings } from '../utils/Strings';
import useAddress from '../hooks/useAddress';

const AddressScreen = () => {
    const { address, currentAddress, setCurrentAddress } = useAddress();

    return (
        <Container>
            <Header text={Strings.address.label} backButton />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={address}
                renderItem={({ item }) => (
                    <ItemAddress
                        address={item}
                        selected={currentAddress?.id === item.id}
                        onPress={() => setCurrentAddress(item)}
                    />
                )}
                keyExtractor={(item) => item?.id!}
            />
        </Container>
    );
};

export default AddressScreen;

const styles = StyleSheet.create({});
