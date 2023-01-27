import { STORAGE_KEY } from '../utils/Constants';
import { storeData, getData } from '../utils/Storage';

function useFavorite() {
    const addFavorite = async (id: string) => {
        await storeData('', id);
    };

    const isFavorite = () => {};

    return { addFavorite, isFavorite };
}

export default useFavorite;
