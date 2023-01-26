import React, { createContext, useState } from 'react';

export const UtilContext = createContext<{
    showToast: boolean;
    messageToast: string;
    setShowToast: React.Dispatch<boolean>;
    setMessageToast: React.Dispatch<string>;
}>({
    showToast: false,
    messageToast: '',
    setShowToast: () => {},
    setMessageToast: () => {},
});

export const UtilProvider = ({ children }: any) => {
    const [showToast, setShowToast] = useState(false);
    const [messageToast, setMessageToast] = useState('');
    return (
        <UtilContext.Provider
            value={{
                showToast,
                messageToast,
                setShowToast,
                setMessageToast,
            }}>
            {children}
        </UtilContext.Provider>
    );
};
