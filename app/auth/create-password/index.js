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

const CreatePassword = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const router = useRouter();

    const goBack = () => {
        history.goBackReplace('/auth');
    };

    const onSubmit = (values) => {
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
                            Create password
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
                <Formik initialValues={{ newPassword: '', confirmPassword: '' }} onSubmit={onSubmit}>
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
                                        onChangeText={handleChange('newPassword')}
                                        onBlur={handleBlur('newPassword')}
                                        value={values.newPassword}
                                        label={'New Password'}
                                        placeholder={'Enter new password...'}
                                        textContentType={'newPassword'}
                                        secureTextEntry={true}
                                        withForm={true}
                                        helperText={'Minimum 8 characters'}
                                    />
                                    <Input
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur('confirmPassword')}
                                        value={values.confirmPassword}
                                        label={'Confirm Password'}
                                        placeholder={'Confirm password...'}
                                        textContentType={'password'}
                                        secureTextEntry={true}
                                        withForm={true}
                                        helperText={'Minimum 8 characters'}
                                    />
                                </View>
                            </ScrollView>
                            <DefaultButton type={'submit'} onPress={handleSubmit}>
                                Create password
                            </DefaultButton>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default CreatePassword;
