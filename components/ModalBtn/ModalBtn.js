import { Pressable } from 'react-native';
import { DefaultText } from '../common/DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';

export const ModalBtn = ({ children, ...props }) => {
    return (
        <Pressable
            style={{
                borderTopColor: '#bababa',
                borderTopWidth: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 44,
            }}
            {...props}
        >
            <DefaultText
                style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.bold,
                    textAlign: 'center',
                }}
            >
                {children}
            </DefaultText>
        </Pressable>
    );
};
