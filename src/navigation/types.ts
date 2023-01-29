import { Product } from '../models/Product';

export type RootStackLogoutParamList = {
    LoginScreen: undefined;
};

export type RootStackLoginParamList = {
    DrawerNavigator: undefined;
};

export type DrawerStackParamList = {
    HomeStack: undefined;
};

export type HomeStackParamList = {
    HomeScreen: undefined;
    DetailScreen: undefined;
    ProductDetailScreen: { item: Product };
    FruitsScreen: undefined;
    VegetablesScreen: undefined;
    CartScreen: undefined;
    CheckoutScreen: undefined;
    FavoritesScreen: undefined;
    AddressScreen: undefined;
    OrdersScreen: undefined;
};
