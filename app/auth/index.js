import { Pressable, ScrollView, View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { Link, useRouter } from 'expo-router';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { useHaveNavigation } from '@store/store';
import { useEffect } from 'react';

const Auth = () => {
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goToSignUp = () => {
        router.replace('/auth/sign-up');
    };

    const goToSignIn = () => {
        router.replace('/auth/sign-in');
    };

    useEffect(() => {
        setHaveNavigation(false);

        return () => setHaveNavigation(true);
    }, []);

    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
                flex: 1,
            }}
        >
            <Header
                style={{
                    flex: 1,
                }}
                title={' '}
                secondSlot={
                    <Link href={'/auth/sign-in'}>
                        <DefaultText
                            style={{
                                fontFamily: FONTS.bold,
                                color: COLORS.white,
                                fontSize: 18,
                            }}
                        >
                            Sign in
                        </DefaultText>
                    </Link>
                }
            >
                <ScrollView style={{ flexGrow: 1, paddingTop: 56 }}>
                    <View
                        style={{
                            gap: 24,
                        }}
                    >
                        <DefaultText
                            style={{
                                color: COLORS.white,
                                fontSize: 40,
                                fontFamily: FONTS.bold,
                            }}
                        >
                            Track your sobriety with a community that understands what you're going through
                        </DefaultText>
                        <DefaultText
                            style={{
                                color: COLORS.white,
                                fontSize: 20,
                                lineHeight: 28,
                            }}
                        >
                            To get rewards, day sober, and money saved calculation, click Next below. All Information is
                            stored on your device only!
                        </DefaultText>
                        <View
                            style={{
                                marginTop: 24,
                                gap: 8,
                            }}
                        >
                            <DefaultButton variant={'light'} onPress={goToSignUp}>
                                Create account
                            </DefaultButton>
                            <DefaultButton variant={'light-blue'} onPress={goToSignIn}>
                                I have an account
                            </DefaultButton>
                        </View>
                    </View>
                </ScrollView>
            </Header>
        </View>
    );
};

export default Auth;
