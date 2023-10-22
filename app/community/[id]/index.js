import { Pressable, ScrollView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useHaveNavigation } from '@store/store';
import { COLORS, FONTS } from '@constants/theme';
import { CommentsModal } from '@components/common/CommentsModal/CommentsModal';
import { ArrowLong } from '@assets/icons/arrow-long';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { TimeInfo } from '@components/common/TimeInfo/TimeInfo';
import { MessageReply } from '@assets/icons/message-reply';
import { SharePost } from '@assets/icons/share-post';
import { IconButton } from '@components/common/IconButton/IconButton';
import { globalStyles } from '@styles/globalStyles';
import { useHistory } from '../../../hooks/useHistory';

const Post = () => {
    const history = useHistory();
    const [, setHaveNavigation] = useHaveNavigation();
    const [isCommentsModalVisible, setIsCommentsModalVisible] = useState(false);

    const openModal = () => {
        setIsCommentsModalVisible(true);
    };

    const closeModal = () => {
        setIsCommentsModalVisible(false);
    };

    const goBack = () => {
        history.goBack('/community');
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
            <CommentsModal isVisible={isCommentsModalVisible} onClose={closeModal} />

            <View
                style={{
                    paddingTop: 56,
                    padding: 24,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.grayLight,
                }}
            >
                <IconButton
                    style={{
                        marginBottom: 16,
                    }}
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
                <DefaultText
                    style={{
                        fontSize: 24,
                        lineHeight: 32,
                        fontFamily: FONTS.bold,
                        marginBottom: 8,
                    }}
                >
                    Working on the 12 steps is absolutely necessary to staying clean
                </DefaultText>
                <TimeInfo time={'19 hours ago'} author={'Samantha Williams'} />
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
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderTopWidth: 1,
                    borderTopColor: COLORS.grayLight,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0,
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
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 12,
                        gap: 24,
                    }}
                >
                    <Pressable onPress={openModal}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MessageReply
                                style={{
                                    width: 18,
                                    height: 18,
                                    marginRight: 6,
                                }}
                            />
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
                        </View>
                    </Pressable>

                    <Pressable>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <SharePost
                                style={{
                                    width: 18,
                                    height: 18,
                                    marginRight: 6,
                                    stroke: COLORS.primary,
                                }}
                            />
                            <DefaultText
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.3,
                                    color: COLORS.primary,
                                    fontFamily: FONTS.bold,
                                }}
                            >
                                Share
                            </DefaultText>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Post;
