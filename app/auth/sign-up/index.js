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

const SignUp = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goBack = () => {
        history.goBackReplace('/auth');
    };

    const onSubmit = (values) => {
        router.replace('/auth/verification');
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
                            Create account
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
                <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={onSubmit}>
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
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        label={'Name'}
                                        placeholder={'Enter Name...'}
                                        withForm={true}
                                    />
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        label={'Email'}
                                        placeholder={'Enter Email...'}
                                        withForm={true}
                                        keyboardType={'email-address'}
                                        textContentType={'emailAddress'}
                                        helperText={'This is an error message.'}
                                        isError={true}
                                    />
                                    <Input
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        label={'Password'}
                                        placeholder={'Enter Password...'}
                                        helperText={'Minimum 8 characters'}
                                        textContentType={'newPassword'}
                                        secureTextEntry={true}
                                        withForm={true}
                                    />
                                </View>
                            </ScrollView>
                            <DefaultButton type={'submit'} onPress={handleSubmit}>
                                Create
                            </DefaultButton>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default SignUp;
