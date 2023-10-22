import { ScrollView, View } from 'react-native';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';
import { Input } from '@components/common/Input/Input';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { Link } from 'expo-router';

export const Step3 = ({ onSubmit }) => {
    return (
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
                            How much did your addiction cost per day?
                        </DefaultText>
                        <DefaultText
                            style={{
                                color: COLORS.gray,
                                lineHeight: 22,
                            }}
                        >
                            Include estimates for lost jobs, wasted time, missed opportunities, medical costs, etc.
                        </DefaultText>
                    </View>
                    <Input symbol={'$'} label={'Cost'} />
                </View>
            </ScrollView>
            <DefaultButton type={'submit'} onPress={onSubmit}>
                Next
            </DefaultButton>
        </View>
    );
};
