import { COLORS } from '@constants/theme';
import { Avatar } from '@components/common/Avatar/Avatar';
import { Pressable, View } from 'react-native';
import { EditPhoto } from '@assets/icons/editPhoto';
import { globalStyles } from '@styles/globalStyles';

export const EditAvatar = () => {
    return (
        <View
            style={[
                {
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                },
                globalStyles.shadow,
            ]}
        >
            <Avatar size={80}>SW</Avatar>
            <Pressable
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}
            >
                <View
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: '#12A7DA',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <EditPhoto
                            style={{
                                width: 16,
                                height: 16,
                            }}
                        />
                    </View>
                </View>
            </Pressable>
        </View>
    );
};
