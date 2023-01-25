import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import ItemEmpty from '../ItemEmpty/ItemEmpty';

describe('test ItemEmpty component', () => {
    const icon = 'add';
    const message = 'Cart is empty!';

    test('should match snapshot', () => {
        const component = render(<ItemEmpty icon={icon} message={message} />);
        expect(component).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<ItemEmpty icon={icon} message={message} />);
        expect(screen).toBeTruthy();
    });

    test('should render title', () => {
        render(<ItemEmpty icon={icon} message={message} />);
        expect(screen.getByText(message)).toBeTruthy();
    });

    test('should render icon', () => {
        render(<ItemEmpty icon={icon} message={message} />);
        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('icon').props.name).toBe('add');
        expect(screen.getByTestId('icon').props.size).toBe(130);
        expect(screen.getByTestId('icon').props.color).toBe(Colors.greyLight);
    });
});
