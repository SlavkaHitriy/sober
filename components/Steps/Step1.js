import { ScrollView, View } from 'react-native';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { FONTS } from '@constants/theme';
import { Input } from '@components/common/Input/Input';
import { Formik } from 'formik';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';

export const Step1 = ({ onSubmit }) => {
    return (
        <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
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
                                    fontSize: 24,
                                    fontFamily: FONTS.bold,
                                }}
                            >
                                Introduce yourself 😊
                            </DefaultText>
                            <Input
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                label={'Enter your name'}
                                placeholder={'Name...'}
                                withForm={true}
                            />
                        </View>
                    </ScrollView>
                    <DefaultButton type={'submit'} onPress={handleSubmit}>
                        Next
                    </DefaultButton>
                </View>
            )}
        </Formik>
    );
};
