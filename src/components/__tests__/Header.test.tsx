import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import Header from '../Header/Header';

describe('Test Header', () => {
    test('should match snapshot', () => {
        const header = render(<Header text='Cart' backButton />);
        expect(header).toMatchSnapshot();
    });
    test('should render title', () => {
        render(<Header text='Cart' backButton />);
        expect(screen.getByText('Cart')).toBeTruthy();
    });

    test('should render icon', () => {
        render(<Header text='Cart' backButton />);
        screen.debug();
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('chevron-back-outline');
        expect(screen.getByTestId('icon').props.size).toBe(32);
        expect(screen.getByTestId('icon').props.color).toBe(Colors.black);
    });

    test('should render button', () => {
        render(<Header text='Cart' backButton />);
        const button = screen.getByTestId('back-button');
        expect(button).toBeTruthy();
    });

    test('should call fn when press button', () => {
        render(<Header text='Cart' backButton />);
        const button = screen.getByTestId('back-button');
        fireEvent.press(button);
    });
});
