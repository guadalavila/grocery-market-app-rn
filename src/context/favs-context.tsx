import React from 'react';
import { createContext, useState } from 'react';
import { Product } from '../models/Product';
import { STORAGE_KEY } from '../utils/Constants';
import { getData } from '../utils/Storage';

export const FavsContext = createContext<{
    setData: any;
    addRemoveProduct: React.Dispatch<Product>;
    isFavorite: any;
    favorites: Product[];
}>({
    setData: () => {},
    addRemoveProduct: () => {},
    isFavorite: () => {},
    favorites: [],
});

export const FavsProvider = ({ children }: any) => {
    const [favs, setFavs] = useState<Product[]>([]);

    async function setData() {
        const favs_ = (await getData(STORAGE_KEY.FAVORITE)) ?? [];
        setFavs([...favs_]);
    }

    function addRemoveProduct(product: Product) {
        if (favs.find((x) => x.id === product.id)) {
            const aux = favs.filter((x) => x.id !== product.id);
            setFavs([...aux]);
        } else {
            setFavs([...favs, product]);
        }
    }

    function isFavorite(product: Product): boolean {
        return favs.find((x) => x.id === product.id) ? true : false;
    }

    return (
        <FavsContext.Provider
            value={{
                setData,
                addRemoveProduct,
                isFavorite,
                favorites: favs,
            }}>
            {children}
        </FavsContext.Provider>
    );
};
