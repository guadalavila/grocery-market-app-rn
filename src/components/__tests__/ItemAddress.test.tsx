import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ItemAddress from '../ItemAddress/ItemAddress';
import { Colors } from '../../utils/Colors';

describe('test ItemAddress component', () => {
    const addressMock = {
        id: '3xx68afc-c609-48d3-a4f8-fbd91aa97f67',
        address: 'Av Belgrano 1440',
        city: 'Salta',
        country: 'Argentina',
        codePostal: '4400',
        selected: true,
    };

    test('should match with snapshot', () => {
        const component = render(<ItemAddress address={addressMock} />);
        expect(component).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemAddress address={addressMock} />);
        expect(screen).toBeTruthy();
    });
    test('should render texts', () => {
        render(<ItemAddress address={addressMock} />);
        expect(screen.getByText('Av Belgrano 1440')).toBeTruthy();
        expect(screen.getByText('Salta, Argentina')).toBeTruthy();
        expect(screen.getByText('4400')).toBeTruthy();
    });

    test('should render icon when select', () => {
        render(<ItemAddress address={addressMock} />);
        expect(screen.getByTestId('icon-check')).toBeTruthy();
        expect(screen.getByTestId('icon-check').props.name).toBe('checkmark');
        expect(screen.getByTestId('icon-check').props.size).toBe(26);
        expect(screen.getByTestId('icon-check').props.color).toBe(Colors.primary);
    });
});
