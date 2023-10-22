import { Pressable } from 'react-native';
import { DefaultText } from '../DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';
import { useState } from 'react';

export const DefaultButton = ({ children, variant, ...props }) => {
    const isLight = variant === 'light';
    const isLightBlue = variant === 'light-blue';
    const [isPressed, setIsPressed] = useState(false);

    const handleTouchStart = () => {
        setIsPressed(true);
    };

    const handleTouchEnd = () => {
        setIsPressed(false);
    };

    return (
        <Pressable
            style={{
                backgroundColor: isPressed
                    ? COLORS.primary
                    : isLight
                    ? COLORS.white
                    : isLightBlue
                    ? '#02a0e3'
                    : '#12A7DA',
                padding: 16,
                borderRadius: 100,
                height: 56,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            {...props}
        >
            <DefaultText
                style={{
                    color: isLight ? COLORS.black : COLORS.white,
                    fontSize: 18,
                    fontFamily: FONTS.bold,
                    textAlign: 'center',
                }}
            >
                {children}
            </DefaultText>
        </Pressable>
    );
};
