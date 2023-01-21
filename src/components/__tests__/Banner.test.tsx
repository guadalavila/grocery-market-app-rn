import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Banner from '../Banner/Banner';

describe('Banner', () => {
    const firstText = 'I am small Text';
    const secondText = 'I am big text';

    test('should match snapshot ', () => {
        const banner = render(<Banner smallText={firstText} bigText={secondText} />);
        expect(banner).toMatchSnapshot();
    });

    test('renders the correct message', () => {
        render(<Banner smallText={firstText} bigText={secondText} />);
        expect(screen.getByText(firstText)).toBeTruthy();
        expect(screen.getByText(secondText)).toBeTruthy();
    });

    test('should render image', () => {
        render(<Banner smallText={firstText} bigText={secondText} />);
        expect(screen.getByTestId('image')).toBeTruthy();
        // screen.debug();
    });
});
