import { Strings } from './Strings';

export const STORAGE_KEY = {
    FAVORITE: '@favorite',
};

export const MENU_ITEMS = [
    {
        label: Strings.favorites.label,
        screen: 'FavoritesScreen',
    },
    {
        label: Strings.address.label,
        screen: 'AddressScreen',
    },
    {
        label: Strings.orders.label,
        screen: 'OrdersScreen',
    },
];
