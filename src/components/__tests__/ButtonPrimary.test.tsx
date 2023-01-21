import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

describe('render ButtonPrimary component', () => {
    const label = 'Click me';
    const onPressMock = jest.fn();

    test('should match component', () => {
        const button = render(<ButtonPrimary label={label} onPress={onPressMock} />);
    });

    test('should render component', () => {
        render(<ButtonPrimary label={label} onPress={onPressMock} />);
        expect(screen).toBeTruthy();
    });

    test('should render label', () => {
        render(<ButtonPrimary label={label} onPress={onPressMock} />);
        expect(screen.getByText(label)).toBeTruthy();
    });

    test('should render button and call fn', () => {
        render(<ButtonPrimary testID='button' label={label} onPress={onPressMock} />);
        const btn = screen.getByTestId('button');
        expect(btn).toBeTruthy();
        fireEvent.press(btn);
        expect(onPressMock).toHaveBeenCalled();
    });
});
