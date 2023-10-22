import { Text } from 'react-native';
import { memo } from 'react';
import { COLORS, FONTS } from '@constants/theme';

export const DefaultText = memo(({ children, style, ...props }) => {
    const styles = {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.black,
    };

    return (
        <Text
            style={
                Array.isArray(style)
                    ? [styles, ...style]
                    : {
                          ...styles,
                          ...style,
                      }
            }
            {...props}
        >
            {children}
        </Text>
    );
});
