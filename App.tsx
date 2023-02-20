import React from 'react';
import MainAppContainer from './src/components/MainAppContainer';
import { AddressProvider } from './src/context/address-context';
import { CartProvider } from './src/context/cart-context';
import { FavsProvider } from './src/context/favs-context';
import { UtilProvider } from './src/context/util-context';

const App = () => {
    return (
        <CartProvider>
            <UtilProvider>
                <FavsProvider>
                    <AddressProvider>
                        <MainAppContainer />
                    </AddressProvider>
                </FavsProvider>
            </UtilProvider>
        </CartProvider>
    );
};

export default App;
