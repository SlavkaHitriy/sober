import { ScrollView, View } from 'react-native';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';
import { Formik } from 'formik';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { useEffect, useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';

export const Step2 = ({ onSubmit }) => {
    return (
        <Formik initialValues={{ date: new Date() }} onSubmit={onSubmit}>
            {({ handleSubmit, setFieldValue, values }) => (
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
                            <View
                                style={{
                                    gap: 12,
                                }}
                            >
                                <DefaultText
                                    style={{
                                        fontSize: 24,
                                        fontFamily: FONTS.bold,
                                    }}
                                >
                                    Hi, Samantha! 👋
                                </DefaultText>
                                <DefaultText
                                    style={{
                                        color: COLORS.gray,
                                        lineHeight: 22,
                                    }}
                                >
                                    What date did you become sober or when do you want to start tracking?
                                </DefaultText>
                            </View>
                            <DefaultText style={{ marginBottom: 8, fontSize: 14 }}>Select date</DefaultText>
                            <DatePicker
                                mode={'date'}
                                display={'spinner'}
                                onChange={(_, newDate) => {
                                    setFieldValue('date', newDate);
                                }}
                                // textColor={COLORS.black}
                                value={values.date}
                                themeVariant={'light'}
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
