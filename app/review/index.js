import { COLORS, FONTS } from '@constants/theme';
import { Stack, useRouter } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';
import { Header } from '@components/common/Header/Header';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { useState } from 'react';
import { Stars } from '@libs/react-native-stars';
import starEmpty from '@assets/images/star-gray-empty.png';
import star from '@assets/images/star-yellow.png';
import starDark from '@assets/images/star-yellow-dark.png';
import starDarkEmpty from '@assets/images/star-yellow-empty.png';
import { Input } from '@components/common/Input/Input';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { ModalBtn } from '@components/ModalBtn/ModalBtn';
import Modal from 'react-native-modal';
import { Avatar } from '@components/common/Avatar/Avatar';

const Review = () => {
    const router = useRouter();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const goBack = () => {
        router.push('/settings');
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
        goBack();
    };

    const handleSentReview = () => {
        setIsOpenModal(true);
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
            }}
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <Header
                        title={'Review'}
                        secondSlot={
                            <Pressable onPress={goBack}>
                                <DefaultText
                                    style={{
                                        fontFamily: FONTS.bold,
                                        color: COLORS.white,
                                        fontSize: 18,
                                    }}
                                >
                                    Cancel
                                </DefaultText>
                            </Pressable>
                        }
                    />
                    <View style={{ padding: 24, backgroundColor: COLORS.white }}>
                        <View
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            <Stars
                                disabled={true}
                                default={4}
                                emptyStar={starEmpty}
                                fullStar={star}
                                halfStar={star}
                                starSize={40}
                            />
                        </View>
                        <View
                            style={{
                                gap: 16,
                            }}
                        >
                            <Input label={'Review title'} placeholder={'Title'} />
                            <Input label={'Review content'} multiline={true} placeholder={'Comment'} />
                        </View>
                    </View>
                    <View
                        style={{
                            padding: 24,
                        }}
                    >
                        <DefaultButton onPress={handleSentReview}>Send</DefaultButton>
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                isVisible={isOpenModal}
                onBackdropPress={handleCloseModal}
                backdropTransitionOutTiming={0}
            >
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#CBCBCB',
                        paddingTop: 18,
                        borderRadius: 14,
                        overflow: 'hidden',
                    }}
                >
                    <View
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        <Avatar size={80}>JO</Avatar>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 16,
                        }}
                    >
                        <DefaultText
                            style={{
                                fontSize: 17,
                                fontFamily: FONTS.bold,
                                marginBottom: 4,
                            }}
                        >
                            All done!
                        </DefaultText>
                    </View>
                    <View
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        <Stars
                            disabled={true}
                            default={4}
                            emptyStar={starDarkEmpty}
                            fullStar={starDark}
                            halfStar={starDark}
                            starSize={32}
                        />
                    </View>
                    <ModalBtn onPress={handleCloseModal}>Go back</ModalBtn>
                </View>
            </Modal>
        </View>
    );
};

export default Review;
