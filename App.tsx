import React from 'react';
import MainAppContainer from './src/components/MainAppContainer';
import { CartProvider } from './src/context/cart-context';
import { FavsProvider } from './src/context/favs-context';
import { UtilProvider } from './src/context/util-context';

const App = () => {
    return (
        <CartProvider>
            <UtilProvider>
                <FavsProvider>
                    <MainAppContainer />
                </FavsProvider>
            </UtilProvider>
        </CartProvider>
    );
};

export default App;
