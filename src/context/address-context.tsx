import React, { createContext, useState } from 'react';
import { Address } from '../models/Address';

export const AddressContext = createContext<{
    currentAddress: Address | undefined;
    setCurrentAddress: React.Dispatch<Address>;
    address: Address[];
    setAddress: React.Dispatch<Address[]>;
}>({
    currentAddress: undefined,
    setCurrentAddress: () => {},
    address: [],
    setAddress: () => {},
});

export const AddressProvider = ({ children }: any) => {
    const [currentAddress, setCurrentAddress] = useState<Address | undefined>(undefined);
    const [address, setAddress] = useState<Address[]>([]);
    return (
        <AddressContext.Provider
            value={{
                currentAddress,
                setCurrentAddress,
                address,
                setAddress,
            }}>
            {children}
        </AddressContext.Provider>
    );
};
