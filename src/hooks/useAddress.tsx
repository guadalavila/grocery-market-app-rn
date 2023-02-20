import { useContext } from 'react';
import { AddressContext } from '../context/address-context';

function useAddress() {
    const { setAddress, currentAddress, address, setCurrentAddress } = useContext(AddressContext);

    return {
        setAddress,
        setCurrentAddress,
        currentAddress,
        address,
    };
}
export default useAddress;
