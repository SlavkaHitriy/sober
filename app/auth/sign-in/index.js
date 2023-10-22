import { Pressable, ScrollView, View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { useRouter } from 'expo-router';
import { IconButton } from '@components/common/IconButton/IconButton';
import { globalStyles } from '@styles/globalStyles';
import { ArrowLong } from '@assets/icons/arrow-long';
import { useHaveNavigation } from '@store/store';
import { useEffect } from 'react';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { Input } from '@components/common/Input/Input';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { Formik } from 'formik';
import { useHistory } from '../../../hooks/useHistory';

const SignIn = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goBack = () => {
        history.goBackReplace('/auth');
    };

    const onSubmit = (values) => {
        router.replace('/');
    };

    const goToSignUp = () => {
        router.replace('/auth/sign-up');
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
                            Welcome back! 👋
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
                <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        label={'Email'}
                                        placeholder={'Enter Email...'}
                                        withForm={true}
                                        keyboardType={'email-address'}
                                        textContentType={'emailAddress'}
                                    />
                                    <Input
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        label={'Password'}
                                        placeholder={'Enter Password...'}
                                        textContentType={'newPassword'}
                                        secureTextEntry={true}
                                        withForm={true}
                                        helperLink={true}
                                    />
                                </View>
                            </ScrollView>
                            <View
                                style={{
                                    gap: 24,
                                }}
                            >
                                <DefaultButton type={'submit'} onPress={handleSubmit}>
                                    Log in
                                </DefaultButton>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'baseline',
                                        justifyContent: 'center',
                                        gap: 4,
                                    }}
                                >
                                    <DefaultText
                                        style={{
                                            fontSize: 14,
                                            color: COLORS.gray,
                                        }}
                                    >
                                        Don’t have an account?
                                    </DefaultText>
                                    <Pressable
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                        onPress={goToSignUp}
                                    >
                                        <DefaultText
                                            style={{
                                                color: COLORS.primary,
                                                fontFamily: FONTS.bold,
                                            }}
                                        >
                                            Sign up
                                        </DefaultText>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default SignIn;
