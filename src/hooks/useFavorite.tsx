import { useContext, useEffect } from 'react';
import { FavsContext } from '../context/favs-context';

function useFavorite() {
    const { setData } = useContext(FavsContext);
    useEffect(() => {
        setData();
    }, []);
}

export default useFavorite;
