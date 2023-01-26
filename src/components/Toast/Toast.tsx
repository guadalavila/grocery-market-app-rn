import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { UtilContext } from '../../context/util-context';
import { styles } from './styles';

interface IToastProps {
    message: string;
    position?: 'top' | 'bottom';
}

const Toast = ({ message, position = 'top' }: IToastProps) => {
    const [show, setShow] = useState(true);
    const { setShowToast } = useContext(UtilContext);

    useEffect(() => {
        setTimeout(() => {
            setShowToast(false);
            setShow(false);
        }, 1500);
    }, []);

    return (
        <>
            {show && (
                <View style={[styles.container, position === 'top' ? styles.top : styles.bottom]}>
                    <Text style={styles.text}>{message}</Text>
                </View>
            )}
        </>
    );
};

export default Toast;
