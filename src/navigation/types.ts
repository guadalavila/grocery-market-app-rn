import { Product } from '../models/Product';

export type RootStackLogoutParamList = {
    LoginScreen: undefined;
};

export type RootStackLoginParamList = {
    HomeScreen: undefined;
    DetailScreen: undefined;
    ProductDetailScreen: { item: Product };
    FruitsScreen: undefined;
    VegetablesScreen: undefined;
};
