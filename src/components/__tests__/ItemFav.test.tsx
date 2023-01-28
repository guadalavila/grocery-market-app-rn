import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import ItemFav from '../ItemFav/ItemFav';

describe('test ItemFav component', () => {
    const productMock = {
        id: '6b17d300-943a-11ed-a1eb-0242ac120002',
        image: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1673720991/grocery-store/banana-_yagtxh.webp',
        name: 'Banana',
        description: 'Organicas',
        price: 20.0,
    };

    test('should match with snapshot', () => {
        const component = render(<ItemFav product={productMock} />);
        expect(component).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemFav product={productMock} />);
        expect(screen).toBeTruthy();
    });
    test('should render text', () => {
        render(<ItemFav product={productMock} />);
        expect(screen.getByText(productMock.name)).toBeTruthy();
    });

    test('should render image', () => {
        render(<ItemFav product={productMock} />);
        expect(screen.getByTestId('image')).toBeTruthy();
        expect(screen.getByTestId('image').props.resizeMode).toBe('center');
    });

    test('should render icon', () => {
        render(<ItemFav product={productMock} />);
        expect(screen.getByTestId('icon-heart')).toBeTruthy();
        expect(screen.getByTestId('icon-heart').props.name).toBe('heart');
        expect(screen.getByTestId('icon-heart').props.color).toBe(Colors.red);
        expect(screen.getByTestId('icon-heart').props.size).toBe(20);
    });

    test('should call fn', () => {
        render(<ItemFav product={productMock} />);
        const button = screen.getByTestId('btn-fav');
        expect(button).toBeTruthy();
        fireEvent.press(button);
    });
});
