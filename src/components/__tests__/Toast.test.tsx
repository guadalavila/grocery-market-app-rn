import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Toast from '../Toast/Toast';

describe('Test Toast component', () => {
    test('should render component', () => {
        render(<Toast message='Hiii!' />);
        expect(screen).toBeTruthy();
    });

    test('should render text', () => {
        render(<Toast message='Hiii!' />);
        expect(screen.getByText('Hiii!')).toBeTruthy();
    });
});
