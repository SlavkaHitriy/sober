import { Pressable, ScrollView, View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { useRouter } from 'expo-router';
import { IconButton } from '@components/common/IconButton/IconButton';
import { globalStyles } from '@styles/globalStyles';
import { ArrowLong } from '@assets/icons/arrow-long';
import { useHaveNavigation } from '@store/store';
import { useEffect, useState } from 'react';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { styles } from '@app/auth/verification/styles';
import { useHistory } from '../../../hooks/useHistory';

const Verification = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 6 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const goBack = () => {
        history.goBackReplace('/auth');
    };

    const onSubmit = () => {
        router.replace('/');
    };

    useEffect(() => {
        setHaveNavigation(false);

        return () => setHaveNavigation(true);
    }, []);

    useEffect(() => {
        if (value.length === 6) {
            onSubmit();
        }
    }, [value]);

    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
                flex: 1,
            }}
        >
            <Header
                secondSlot={
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <IconButton
                            onPress={goBack}
                            icon={
                                <ArrowLong
                                    style={[
                                        {
                                            stroke: COLORS.white,
                                        },
                                        globalStyles.icon,
                                    ]}
                                />
                            }
                        />
                        <DefaultText
                            style={{
                                fontSize: 24,
                                color: COLORS.white,
                                fontFamily: FONTS.bold,
                                lineHeight: 28,
                            }}
                        >
                            Verification code
                        </DefaultText>
                    </View>
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
                        gap: 24,
                        flexGrow: 1,
                        paddingBottom: 24,
                    }}
                >
                    <ScrollView
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        <View
                            style={{
                                gap: 24,
                            }}
                        >
                            <DefaultText
                                style={{
                                    color: COLORS.gray,
                                    lineHeight: 22,
                                }}
                            >
                                Enter code that we have sent to your email samxxxxx@email.com
                            </DefaultText>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={6}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <DefaultText
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}
                                        key={index}
                                    >
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </DefaultText>
                                )}
                            />
                            <View
                                style={{
                                    alignItems: 'center',
                                    gap: 4,
                                }}
                            >
                                <DefaultText
                                    style={{
                                        color: COLORS.gray,
                                        lineHeight: 22,
                                    }}
                                >
                                    If it’s taking longer than 10 minutes,
                                </DefaultText>
                                <Pressable>
                                    <DefaultText
                                        style={{
                                            color: COLORS.primary,
                                            fontFamily: FONTS.bold,
                                            textDecorationLine: 'underline',
                                        }}
                                    >
                                        resend the link
                                    </DefaultText>
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Verification;
