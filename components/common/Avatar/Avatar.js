import { DefaultText } from '../DefaultText/DefaultText';
import { View } from 'react-native';
import { COLORS } from '@constants/theme';

export const Avatar = ({ children, size = 32 }) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: '#C4E2F7',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <DefaultText
                style={{
                    fontSize: size * 0.4,
                    lineHeight: size * 0.5,
                    letterSpacing: 0.3,
                    color: COLORS.primary,
                    textTransform: 'uppercase',
                }}
            >
                {children}
            </DefaultText>
        </View>
    );
};
