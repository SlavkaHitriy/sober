import { Pressable, View } from 'react-native';
import { DefaultText } from '../DefaultText/DefaultText';
import { TimeInfo } from '../TimeInfo/TimeInfo';
import { Avatar } from '../Avatar/Avatar';
import { COLORS, FONTS } from '@constants/theme';

export const CommentItem = ({ children }) => {
    return (
        <View
            style={{
                paddingTop: 24,
                paddingLeft: 24,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 10,
                }}
            >
                <Avatar>JO</Avatar>

                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            marginBottom: 4,
                        }}
                    >
                        <TimeInfo time={'19 hours ago'} author={'Jonathan Oliver'} isBold={true} />
                    </View>
                    <DefaultText
                        style={{
                            fontSize: 14,
                            lineHeight: 20,
                            marginBottom: 8,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor sit amet orci cursus
                        dapibus.
                    </DefaultText>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 24,
                        }}
                    >
                        <DefaultText
                            style={{
                                fontSize: 12,
                                letterSpacing: 0.3,
                                color: COLORS.gray,
                            }}
                        >
                            9 Replies
                        </DefaultText>
                        <Pressable>
                            <DefaultText
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.3,
                                    color: COLORS.primary,
                                    fontFamily: FONTS.bold,
                                }}
                            >
                                Reply
                            </DefaultText>
                        </Pressable>
                    </View>
                </View>
            </View>
            {children && (
                <View
                    style={{
                        paddingLeft: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            paddingLeft: 24,
                            marginTop: 24,
                        }}
                    >
                        <View
                            style={{
                                height: 1,
                                width: 32,
                                backgroundColor: COLORS.grayLight,
                            }}
                        />
                        <Pressable>
                            <DefaultText
                                style={{
                                    fontSize: 14,
                                    letterSpacing: 0.3,
                                    color: COLORS.gray,
                                }}
                            >
                                View 2 previous comments
                            </DefaultText>
                        </Pressable>
                    </View>
                    <View>{children}</View>
                </View>
            )}
        </View>
    );
};
