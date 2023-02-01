import { render, screen } from '@testing-library/react-native';
import React from 'react';
import ItemCart from '../ItemCart/ItemCart';

describe('test ItemCart component', () => {
    const itemMock = {
        product: {
            id: '6b17d300-943a-11ed-a1eb-0242ac120002',
            image: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1673720991/grocery-store/banana-_yagtxh.webp',
            name: 'Banana',
            description: 'Organicas',
            price: 20.0,
        },
        quantity: 2,
    };
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const component = render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(component).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(screen).toBeTruthy();
    });

    test('should render image', () => {
        render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(screen.getByTestId('image')).toBeTruthy();
        expect(screen.getByTestId('image').props.resizeMode).toBe('center');
    });

    test('should render close icon', () => {
        render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(screen.getByTestId('icon-close')).toBeTruthy();
        expect(screen.getByTestId('icon-close').props.name).toBe('close');
        expect(screen.getByTestId('icon-close').props.size).toBe(24);
    });

    test('should render texts', () => {
        render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(screen.getByText(itemMock.product.name)).toBeTruthy();
        expect(screen.getByText(`$${itemMock.product.price}.00`)).toBeTruthy();
        expect(screen.getByText(`${itemMock.quantity.toString()} unidades`)).toBeTruthy();
    });

    test('should render button', () => {
        render(<ItemCart item={itemMock} onPressClose={onPressMock} />);
        expect(screen.getByTestId('close-button')).toBeTruthy();
    });
});
