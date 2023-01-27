import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import DetailProduct from '../DetailProduct/DetailProduct';

describe('test DetailProduct component', () => {
    const productMock = {
        id: '6b17d300-943a-11ed-a1eb-0242ac120002',
        image: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1673720991/grocery-store/banana-_yagtxh.webp',
        name: 'Banana',
        description: 'Organicas',
        price: 20.0,
    };
    const onPressMock = jest.fn();

    test('should match with snapshot', () => {
        const component = render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(component).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(screen).toBeTruthy();
    });
    test('should render all texts', () => {
        render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByText(productMock.name)).toBeTruthy();
        expect(screen.getByText(`$ ${productMock.price}.00`)).toBeTruthy();
    });

    test('should render icon', () => {
        render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByTestId('icon-heart')).toBeTruthy();
        expect(screen.getByTestId('icon-heart').props.name).toBe('heart-outline');
        expect(screen.getByTestId('icon-heart').props.size).toBe(22);
        expect(screen.getByTestId('icon-heart').props.color).toBe(Colors.red);
    });

    test('should render button heart', () => {
        render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByTestId('button-heart')).toBeTruthy();
    });

    test('should render add to cart button', () => {
        render(<DetailProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByTestId('button-add-to-cart')).toBeTruthy();
    });
});
