import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import AddressSelected from '../AddressSelected/AddressSelected';

describe('test AddressSelected component', () => {
    const onPressMock = jest.fn();

    describe('should render component', () => {
        render(<AddressSelected onPress={onPressMock} />);
        expect(screen).toBeTruthy();
    });

    describe('render icon', () => {
        render(<AddressSelected onPress={onPressMock} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('chevron-down-outline');
        expect(screen.getByTestId('icon').props.size).toBe(28);
        expect(screen.getByTestId('icon').props.color).toBe(Colors.grey);
    });

    test('should render button', () => {
        render(<AddressSelected onPress={onPressMock} />);
        expect(screen.getByTestId('button')).toBeTruthy();
    });

    describe('should call fn ', () => {
        render(<AddressSelected onPress={onPressMock} />);
        const btn = screen.getByTestId('button');
        fireEvent.press(btn);
        expect(onPressMock).toHaveBeenCalled();
    });
});
