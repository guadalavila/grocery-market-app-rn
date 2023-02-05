import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Subtotal from '../Subtotal/Subtotal';

describe('test Subtotal component', () => {
    test('should match snapshot', () => {
        const component = render(<Subtotal total={100} />);
        expect(component).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<Subtotal total={100} />);
        expect(screen).toBeTruthy();
    });

    test('should render texts', () => {
        render(<Subtotal total={100} />);
        expect(screen.getByText('Subtotal')).toBeTruthy();
        expect(screen.getByText('Total')).toBeTruthy();
        expect(screen.getByTestId('subtotal').children[1]).toContain('100');
        expect(screen.getByTestId('total').children[1]).toContain('110');
    });
});
