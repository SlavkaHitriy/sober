import { DefaultText } from '../DefaultText/DefaultText';
import { View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';

export const TimeInfo = ({ author, time, isBold }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <DefaultText
                style={{
                    fontSize: 14,
                    letterSpacing: 0.3,
                    fontFamily: isBold ? FONTS.bold : FONTS.regular,
                }}
            >
                {author}
            </DefaultText>
            <View
                style={{
                    width: 4,
                    height: 4,
                    marginHorizontal: 4,
                    borderRadius: 4,
                    backgroundColor: '#D9D9D9',
                }}
            />
            <DefaultText
                style={{
                    fontSize: 14,
                    letterSpacing: 0.3,
                    color: COLORS.gray,
                }}
            >
                {time}
            </DefaultText>
        </View>
    );
};
