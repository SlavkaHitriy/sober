import Modal from 'react-native-modal';
import { PanResponder, Platform, Pressable, ScrollView, View } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';
import { DefaultText } from '../DefaultText/DefaultText';
import { Close } from '@assets/icons/close';
import { CommentItem } from './CommentItem';
import { Avatar } from '../Avatar/Avatar';
import { Input } from '../Input/Input';
import { SendMessage } from '@assets/icons/send-message';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';
import { globalStyles } from '@styles/globalStyles';
import { Formik } from 'formik';
import { useRef } from 'react';

PanResponder.create({
    onMoveShouldSetPanResponder: Platform.select({
        default: () => true,
        android: (e, state) => Math.abs(state.dx) > 10 || Math.abs(state.dy) > 10,
    }),
});

export const CommentsModal = ({ isVisible, onClose }) => {
    const inputRef = useRef(null);

    const keyboard = useAnimatedKeyboard();
    const translateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -keyboard.height.value }],
        };
    });

    const handleFormSubmit = (values) => {
        inputRef.current?.clear();
        inputRef.current?.blur();
    };

    return (
        <Modal
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            isVisible={isVisible}
            onBackdropPress={onClose}
            backdropTransitionOutTiming={0}
            style={{
                width: '100%',
                margin: 0,
                justifyContent: 'flex-end',
                paddingTop: 70,
            }}
        >
            <View
                style={{
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: '100%',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 24,
                        paddingLeft: 24,
                        paddingRight: 12,
                        paddingVertical: 4,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.grayLight,
                    }}
                >
                    <DefaultText
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: 18,
                        }}
                    >
                        Comments
                    </DefaultText>
                    <Pressable onPress={onClose}>
                        <View
                            style={{
                                width: 48,
                                height: 48,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Close style={globalStyles.icon} />
                        </View>
                    </Pressable>
                </View>
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            paddingRight: 24,
                            paddingBottom: 24,
                        }}
                    >
                        <CommentItem>
                            <CommentItem />
                        </CommentItem>
                        <CommentItem />
                        <CommentItem />
                        <CommentItem>
                            <CommentItem />
                        </CommentItem>
                    </View>
                </ScrollView>

                <Animated.View
                    style={[
                        {
                            paddingVertical: 16,
                            paddingHorizontal: 24,
                            borderTopWidth: 1,
                            borderTopColor: COLORS.grayLight,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            backgroundColor: COLORS.white,
                        },
                        translateStyle,
                    ]}
                >
                    <Avatar size={48}>JO</Avatar>
                    <Formik initialValues={{ message: '' }} onSubmit={handleFormSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <Input
                                icon={
                                    <Pressable onPress={handleSubmit}>
                                        <SendMessage style={globalStyles.icon} />
                                    </Pressable>
                                }
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('email')}
                                value={values.message}
                                placeholder={'Add comment here...'}
                                withForm={true}
                                inputRef={inputRef}
                            />
                        )}
                    </Formik>
                </Animated.View>
            </View>
        </Modal>
    );
};
