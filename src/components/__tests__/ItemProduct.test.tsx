import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import ItemProduct from '../ItemProduct/ItemProduct';
describe('test ItemProduct component', () => {
    const productMock = {
        id: '6b17d300-943a-11ed-a1eb-0242ac120002',
        image: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1673720991/grocery-store/banana-_yagtxh.webp',
        name: 'Banana',
        description: 'Organicas',
        price: 20.0,
    };
    const onPressMock = jest.fn();

    test('should match snapshot', () => {
        const component = render(<ItemProduct product={productMock} onPress={onPressMock} />);
        expect(component).toMatchSnapshot();
    });

    test('should render component', () => {
        render(<ItemProduct product={productMock} onPress={onPressMock} />);
        expect(screen).toBeTruthy();
    });
    test('should render image', () => {
        render(<ItemProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByTestId('image')).toBeTruthy();
        expect(screen.getByTestId('image').props.resizeMode).toBe('contain');
    });

    test('should render Texts', () => {
        render(<ItemProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByText(productMock.name)).toBeTruthy();
        expect(screen.getByText(productMock.description)).toBeTruthy();
        expect(screen.getByText(`$${productMock.price}`)).toBeTruthy();
    });

    test('should render icon', () => {
        render(<ItemProduct product={productMock} onPress={onPressMock} />);
        expect(screen.getByTestId('icon-add')).toBeTruthy();
        expect(screen.getByTestId('icon-add').props.name).toBe('add');
        expect(screen.getByTestId('icon-add').props.size).toBe(22);
        expect(screen.getByTestId('icon-add').props.color).toBe(Colors.white);
    });

    test('should render button', () => {
        render(<ItemProduct product={productMock} onPress={onPressMock} />);
        const btn = screen.getByTestId('button');
        expect(btn).toBeTruthy();
        fireEvent.press(btn);
        expect(onPressMock).toHaveBeenCalled();
    });
});
