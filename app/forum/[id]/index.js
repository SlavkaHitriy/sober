import { ScrollView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useHaveNavigation } from '@store/store';
import { COLORS, FONTS } from '@constants/theme';
import { ArrowLong } from '@assets/icons/arrow-long';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { SharePost } from '@assets/icons/share-post';
import { IconButton } from '@components/common/IconButton/IconButton';
import { globalStyles } from '@styles/globalStyles';
import { Heart } from '@assets/icons/heart';
import { useHistory } from '../../../hooks/useHistory';

const Forum = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const [isLiked, setIsLiked] = useState(false);

    const goBack = () => {
        history.goBack('/motivation');
    };

    const handleToggleLikePost = () => {
        setIsLiked((prevState) => !prevState);
    };

    useEffect(() => {
        setHaveNavigation(false);

        return () => setHaveNavigation(true);
    }, []);

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                width: '100%',
                flexGrow: 1,
            }}
        >
            <View
                style={{
                    paddingTop: 56,
                    paddingHorizontal: 24,
                    paddingBottom: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.grayLight,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        marginBottom: 16,
                    }}
                >
                    <IconButton
                        icon={
                            <ArrowLong
                                style={[
                                    {
                                        stroke: COLORS.black,
                                    },
                                    globalStyles.icon,
                                ]}
                            />
                        }
                        onPress={goBack}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 12,
                        }}
                    >
                        <IconButton
                            icon={
                                <SharePost
                                    style={[
                                        globalStyles.icon,
                                        {
                                            stroke: COLORS.gray,
                                        },
                                    ]}
                                />
                            }
                        />
                        <IconButton
                            icon={
                                <Heart
                                    style={[
                                        globalStyles.icon,
                                        {
                                            stroke: isLiked ? COLORS.primary : COLORS.gray,
                                            fill: isLiked ? COLORS.primary : 'none',
                                        },
                                    ]}
                                />
                            }
                            onPress={handleToggleLikePost}
                        />
                    </View>
                </View>
                <DefaultText
                    style={{
                        fontSize: 24,
                        lineHeight: 32,
                        fontFamily: FONTS.bold,
                    }}
                >
                    Having difficulty making a decision?
                </DefaultText>
            </View>

            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        gap: 16,
                        paddingVertical: 16,
                        paddingHorizontal: 24,
                    }}
                >
                    <View>
                        <DefaultText
                            style={{
                                lineHeight: 28,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolores facere
                            fuga harum nostrum officiis quibusdam recusandae soluta veritatis! Dolore eaque facilis
                            impedit laborum? Architecto natus nihil recusandae sunt?
                        </DefaultText>
                    </View>
                    <View>
                        <DefaultText
                            style={{
                                lineHeight: 28,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolores facere
                            fuga harum nostrum officiis quibusdam recusandae soluta veritatis! Dolore eaque facilis
                            impedit laborum? Architecto natus nihil recusandae sunt?
                        </DefaultText>
                    </View>
                    <View>
                        <DefaultText
                            style={{
                                lineHeight: 28,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolores facere
                            fuga harum nostrum officiis quibusdam recusandae soluta veritatis! Dolore eaque facilis
                            impedit laborum? Architecto natus nihil recusandae sunt?
                        </DefaultText>
                    </View>
                    <View>
                        <DefaultText
                            style={{
                                lineHeight: 28,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolores facere
                            fuga harum nostrum officiis quibusdam recusandae soluta veritatis! Dolore eaque facilis
                            impedit laborum? Architecto natus nihil recusandae sunt?
                        </DefaultText>
                    </View>
                    <View>
                        <DefaultText
                            style={{
                                lineHeight: 28,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolores facere
                            fuga harum nostrum officiis quibusdam recusandae soluta veritatis! Dolore eaque facilis
                            impedit laborum? Architecto natus nihil recusandae sunt?
                        </DefaultText>
                    </View>
                </View>
            </ScrollView>

            <View
                style={{
                    paddingTop: 16,
                    paddingBottom: 24,
                    paddingHorizontal: 24,
                    borderTopWidth: 1,
                    borderTopColor: COLORS.grayLight,
                    gap: 8,
                }}
            >
                <DefaultText
                    style={{
                        letterSpacing: 0.3,
                        color: '#458FFF',
                        fontFamily: FONTS.bold,
                    }}
                >
                    TO DO:
                </DefaultText>
                <DefaultText
                    style={{
                        lineHeight: 28,
                        color: '#306AC3',
                        fontFamily: FONTS.boldCursive,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor sit amet orci cursus
                    dapibus. Praesent interdum nulla a urna viverra, non tristique.
                </DefaultText>
            </View>
        </View>
    );
};

export default Forum;
