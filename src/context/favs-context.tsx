import React from 'react';
import { createContext, useState } from 'react';
import { STORAGE_KEY } from '../utils/Constants';
import { getData } from '../utils/Storage';

export const FavsContext = createContext<{
    setData: any;
    addRemoveProduct: React.Dispatch<string>;
    isFavorite: any;
}>({
    setData: () => {},
    addRemoveProduct: () => {},
    isFavorite: () => {},
});

export const FavsProvider = ({ children }: any) => {
    const [favs, setFavs] = useState<string[]>([]);

    async function setData() {
        const favs_ = (await getData(STORAGE_KEY.FAVORITE)) ?? [];
        setFavs([...favs_]);
    }

    function addRemoveProduct(id: string) {
        if (favs.find((x) => x === id)) {
            const aux = favs.filter((x) => x !== id);
            setFavs([...aux]);
        } else {
            setFavs([...favs, id]);
        }
    }

    function isFavorite(id: string): boolean {
        return favs.find((x) => x === id) ? true : false;
    }

    return (
        <FavsContext.Provider
            value={{
                setData,
                addRemoveProduct,
                isFavorite,
            }}>
            {children}
        </FavsContext.Provider>
    );
};
