import React from 'react';
import MainAppContainer from './src/components/MainAppContainer';
import { CartProvider } from './src/context/cart-context';

const App = () => {
    return (
        <CartProvider>
            <MainAppContainer />
        </CartProvider>
    );
};

export default App;
