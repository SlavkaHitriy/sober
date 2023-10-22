import { Pressable, ScrollView, View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { useRouter } from 'expo-router';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { useEffect } from 'react';
import { useHaveNavigation } from '@store/store';

const Setup = () => {
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goBack = () => {
        router.replace('/motivation');
    };

    const goToSteps = () => {
        router.replace('/steps');
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
                    <Pressable onPress={goBack}>
                        <DefaultText
                            style={{
                                fontFamily: FONTS.bold,
                                color: COLORS.white,
                                fontSize: 18,
                            }}
                        >
                            Cancel
                        </DefaultText>
                    </Pressable>
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
                            Click “Next” to setup your sober tracking, money saved calculation, get rewards and stay
                            motivated through our supportive community.
                        </DefaultText>
                        <DefaultText
                            style={{
                                color: COLORS.white,
                                fontSize: 20,
                                lineHeight: 28,
                            }}
                        >
                            All information is stored on your device only!
                        </DefaultText>
                        <View
                            style={{
                                marginTop: 24,
                            }}
                        >
                            <DefaultButton variant={'light'} onPress={goToSteps}>
                                Next
                            </DefaultButton>
                        </View>
                    </View>
                </ScrollView>
            </Header>
        </View>
    );
};

export default Setup;
