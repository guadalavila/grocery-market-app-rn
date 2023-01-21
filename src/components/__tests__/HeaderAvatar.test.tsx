import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import { Strings } from '../../utils/Strings';
import HeaderAvatar from '../HeaderAvatar/HeaderAvatar';
describe('test HeaderAvatar component', () => {
    const onPressMock = jest.fn();
    test('should match with snapchot', () => {
        const header = render(<HeaderAvatar onPress={onPressMock} />);
        expect(header).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<HeaderAvatar onPress={onPressMock} />);
        expect(screen).toBeTruthy();
    });

    test('should render title', () => {
        render(<HeaderAvatar onPress={onPressMock} />);
        expect(screen.getByText(Strings.appName)).toBeTruthy();
    });

    test('should render icon', () => {
        render(<HeaderAvatar onPress={onPressMock} />);
        expect(screen.getByTestId('icon-cart')).toBeTruthy();
        expect(screen.getByTestId('icon-cart').props.name).toBe('cart');
        expect(screen.getByTestId('icon-cart').props.size).toBe(22);
        expect(screen.getByTestId('icon-cart').props.color).toBe(Colors.white);
    });

    test('should render button', () => {
        render(<HeaderAvatar onPress={onPressMock} />);
        const btn = screen.getByTestId('button');
        expect(btn).toBeTruthy();
        fireEvent.press(btn);
        expect(onPressMock).toHaveBeenCalled();
    });
});
