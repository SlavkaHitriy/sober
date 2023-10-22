import { Pressable, View } from 'react-native';
import { COLORS } from '@constants/theme';
import { globalStyles } from '@styles/globalStyles';
import { Arrow } from '@assets/icons/arrow';
import { useRouter } from 'expo-router';

export const Item = ({ icon, secondSlot, children, style, onPress, href }) => {
    const router = useRouter();

    const goToPage = () => {
        router.replace(href);
    };

    return (
        <Pressable
            style={{
                paddingHorizontal: 24,
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.grayLight,
                backgroundColor: COLORS.white,
                ...style,
            }}
            onPress={href ? goToPage : onPress}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                }}
            >
                {icon && icon}
                <View style={{ flexGrow: 1, justifyContent: 'center' }}>{children}</View>
                {secondSlot ? secondSlot : <Arrow style={globalStyles.icon} />}
            </View>
        </Pressable>
    );
};
