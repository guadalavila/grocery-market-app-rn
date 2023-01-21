import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Title from '../Title/Title';
describe('test Title component', () => {
    const onPressMock = jest.fn();
    const label = 'Hello World!';
    const textRight = 'View More';

    test('should match snapshot', () => {
        const title = render(<Title label={label} textRight={textRight} onPress={onPressMock} />);
        expect(title).toMatchSnapshot();
    });

    test('should render title', () => {
        render(<Title label={label} textRight={textRight} onPress={onPressMock} />);
        expect(screen.getByText(label)).toBeTruthy();
        expect(screen.getByText(textRight)).toBeTruthy();
    });

    test('should render button and call fn', () => {
        render(<Title label={label} textRight={textRight} onPress={onPressMock} />);
        const btn = screen.getByTestId('button');
        expect(btn).toBeTruthy();
        fireEvent.press(btn);
        expect(onPressMock).toHaveBeenCalled();
    });
});
