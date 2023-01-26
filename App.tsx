import React from 'react';
import MainAppContainer from './src/components/MainAppContainer';
import { CartProvider } from './src/context/cart-context';
import { UtilProvider } from './src/context/util-context';

const App = () => {
    return (
        <CartProvider>
            <UtilProvider>
                <MainAppContainer />
            </UtilProvider>
        </CartProvider>
    );
};

export default App;
