import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Divider from '../Divider/Divider';

describe('test Divider component', () => {
    test('should render ', () => {
        const component = render(<Divider />);
        expect(component).toMatchSnapshot();
    });
    test('should render component', () => {
        render(<Divider />);
        expect(screen).toBeTruthy();
    });
});
