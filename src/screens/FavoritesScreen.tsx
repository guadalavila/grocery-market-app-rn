import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { HomeStackParamList } from '../navigation/types';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Strings } from '../utils/Strings';
import { FavsContext } from '../context/favs-context';
import ItemEmpty from '../components/ItemEmpty/ItemEmpty';
import ItemFav from '../components/ItemFav/ItemFav';

interface Props extends NativeStackScreenProps<HomeStackParamList, 'FavoritesScreen'> {}

const FavoritesScreen = ({}: Props) => {
    const { favorites } = useContext(FavsContext);
    return (
        <Container>
            <Header text={Strings.favorites.label} backButton />
            {favorites.length > 0 ? (
                <>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={favorites}
                        renderItem={({ item }) => <ItemFav product={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </>
            ) : (
                <ItemEmpty icon='heart-outline' message={Strings.favorites.empty} />
            )}
        </Container>
    );
};

export default FavoritesScreen;
