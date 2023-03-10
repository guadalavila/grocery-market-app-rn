const mockedNavigation = jest.fn();
const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: () => ({
            navigate: mockedNavigation,
            goBack: mockedGoBack,
        }),
    };
});

jest.mock('react-native-safe-area-context', () => {
    const inset = { top: 0, right: 0, bottom: 0, left: 0 };
    return {
        SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
        SafeAreaConsumer: jest.fn().mockImplementation(({ children }) => children(inset)),
        useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
    };
});

jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIoniconsIcons');

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
