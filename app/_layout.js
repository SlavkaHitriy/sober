import { Stack, usePathname, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions, View } from 'react-native';
import { useHaveNavigation, useRouterHistory } from '@store/store';
import { NavigationMenu } from '@components/NavigationMenu/NavigationMenu';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const screenHeight = Dimensions.get('window').height;
    const [haveNavigation] = useHaveNavigation();
    const [, setRoutesHistory] = useRouterHistory();
    const segments = useSegments();
    const location = usePathname();

    useEffect(() => {
        setRoutesHistory((prevState) => [...prevState, location]);
    }, [segments]);

    return (
        <>
            <View
                style={{
                    padding: 0,
                    margin: 0,
                    height: haveNavigation ? screenHeight - 70 : screenHeight,
                }}
            >
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </View>
            <NavigationMenu isHiddenMenu={!haveNavigation} />
        </>
    );
};

export default Layout;
