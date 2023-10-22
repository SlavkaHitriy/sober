import { View } from 'react-native';
import { COLORS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { useRouter } from 'expo-router';
import { IconButton } from '@components/common/IconButton/IconButton';
import { globalStyles } from '@styles/globalStyles';
import { ArrowLong } from '@assets/icons/arrow-long';
import { useHaveNavigation } from '@store/store';
import { useEffect, useState } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Step1 } from '@components/Steps/Step1';
import { Step2 } from '@components/Steps/Step2';
import { Step3 } from '@components/Steps/Step3';
import { useHistory } from '../../hooks/useHistory';

const STEPS_COUNT = 3;

const Steps = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const [fullBarWidth, setFullBarWidth] = useState(0);
    const stepsBarWidth = useSharedValue(0);
    const [activeStep, setActiveStep] = useState(1);
    const router = useRouter();

    const goBack = () => {
        if (activeStep > 1) {
            setActiveStep((prevState) => prevState - 1);
        } else {
            history.goBack('/setup');
        }
    };

    const goNext = () => {
        if (activeStep < STEPS_COUNT) {
            setActiveStep((prevState) => prevState + 1);
        } else {
            setActiveStep(1);
            router.replace('/');
        }
    };

    useEffect(() => {
        stepsBarWidth.value = withSpring(activeStep === 3 ? fullBarWidth : (activeStep / STEPS_COUNT) * fullBarWidth);
    }, [activeStep, fullBarWidth]);

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
                secondSlot={
                    <IconButton
                        onPress={goBack}
                        icon={
                            <ArrowLong
                                style={[
                                    {
                                        marginTop: 8,
                                        stroke: COLORS.white,
                                    },
                                    globalStyles.icon,
                                ]}
                            />
                        }
                    />
                }
            />
            <View
                style={{
                    padding: 24,
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 16,
                        marginBottom: 24,
                    }}
                >
                    <DefaultText
                        style={{
                            fontSize: 12,
                        }}
                    >
                        Step {activeStep} of {STEPS_COUNT}
                    </DefaultText>
                    <View
                        onLayout={(e) => {
                            setFullBarWidth(e.nativeEvent.layout.width);
                        }}
                        style={{
                            flex: 1,
                            height: 3,
                            backgroundColor: '#d0edf8',
                            borderRadius: 3,
                            justifyContent: 'center',
                        }}
                    >
                        <Animated.View
                            style={[
                                {
                                    height: 3,
                                    backgroundColor: '#12A7DA',
                                    borderRadius: 3,
                                    maxWidth: '100%',
                                },
                                {
                                    width: stepsBarWidth,
                                },
                            ]}
                        />
                    </View>
                </View>
                <View style={{ flexGrow: 1 }}>
                    {activeStep === 1 && <Step1 onSubmit={goNext} />}
                    {activeStep === 2 && <Step2 onSubmit={goNext} />}
                    {activeStep === 3 && <Step3 onSubmit={goNext} />}
                </View>
            </View>
        </View>
    );
};

export default Steps;
