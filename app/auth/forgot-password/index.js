import { ScrollView, View } from 'react-native';
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

const ForgotPassword = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goBack = () => {
        history.goBackReplace('/auth');
    };

    const onSubmit = (values) => {
        router.replace('/auth/create-password');
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
                            Forgot password
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
                <Formik initialValues={{ email: '' }} onSubmit={onSubmit}>
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
                                    <DefaultText
                                        style={{
                                            fontSize: 14,
                                            color: COLORS.gray,
                                            lineHeight: 24,
                                        }}
                                    >
                                        No worries, you just need to type your email address or username and we will
                                        send the verification code.
                                    </DefaultText>
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
                                </View>
                            </ScrollView>
                            <DefaultButton type={'submit'} onPress={handleSubmit}>
                                Reset my password
                            </DefaultButton>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default ForgotPassword;
