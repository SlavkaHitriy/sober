import { Pressable, View } from 'react-native';
import { DefaultText } from '../common/DefaultText/DefaultText';
import { useState } from 'react';
import { CommentsModal } from '../common/CommentsModal/CommentsModal';
import { TimeInfo } from '../common/TimeInfo/TimeInfo';
import { Link } from 'expo-router';
import { COLORS, FONTS } from '@constants/theme';
import { textToEllipsis } from '@helpers/textToEllipsis';
import { MessageReply } from '@assets/icons/message-reply';
import { SharePost } from '@assets/icons/share-post';

export const Post = ({ title, description, author, time, repliesCount, id }) => {
    const [isCommentsModalVisible, setIsCommentsModalVisible] = useState(false);

    const openModal = () => {
        setIsCommentsModalVisible(true);
    };

    const closeModal = () => {
        setIsCommentsModalVisible(false);
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                padding: 24,
            }}
        >
            <CommentsModal isVisible={isCommentsModalVisible} onClose={closeModal} />

            <View
                style={{
                    paddingBottom: 12,
                    marginBottom: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.grayLight,
                }}
            >
                <Link replace href={`community/${id}`}>
                    <DefaultText style={{ fontSize: 18, fontFamily: FONTS.bold, lineHeight: 24, marginBottom: 4 }}>
                        {title}
                    </DefaultText>
                </Link>
                <DefaultText
                    style={{
                        color: COLORS.gray,
                        lineHeight: 22,
                        marginBottom: 12,
                    }}
                >
                    {textToEllipsis(description, 40)}
                </DefaultText>
                <TimeInfo time={time} author={author} />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <DefaultText
                    style={{
                        fontSize: 12,
                        letterSpacing: 0.3,
                        color: COLORS.gray,
                    }}
                >
                    {repliesCount} Replies
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
