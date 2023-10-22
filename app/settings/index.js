import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Switch, View } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';
import starBlueEmpty from '@assets/images/star-blue-empty.png';
import starEmpty from '@assets/images/star-yellow-empty.png';
import star from '@assets/images/star-yellow-dark.png';
import { Stars } from '@libs/react-native-stars';
import { Avatar } from '@components/common/Avatar/Avatar';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { ModalBtn } from '@components/ModalBtn/ModalBtn';
import { Header } from '@components/common/Header/Header';
import { Item } from '@components/common/Item/Item';
import { SafeHome } from '@assets/icons/safe-home';
import { Notification } from '@assets/icons/notification';
import { globalStyles } from '@styles/globalStyles';
import { Warning } from '@assets/icons/warning';
import { COLORS, FONTS } from '@constants/theme';
import { Tracking } from '@assets/icons/tracking';
import { Remove } from '@assets/icons/remove';
import { Like } from '@assets/icons/like';
import { Edit } from '@assets/icons/edit';
import { Share } from '@assets/icons/share';

const Settings = () => {
    const router = useRouter();

    const [isEnabledResetUser, setIsEnabledResetUser] = useState(false);
    const [isEnabledNotifications, setIsEnabledNotifications] = useState(false);

    const [isRateModalVisible, setIsRateModalVisible] = useState(false);
    const [isReviewed, setIsReviewed] = useState(false);
    const [isRated, setIsRated] = useState(false);
    const [rating, setRating] = useState(0);

    const toggleSwitchUser = () => {
        setIsEnabledResetUser((previousState) => !previousState);
    };

    const toggleSwitchNotifications = () => {
        setIsEnabledNotifications((previousState) => !previousState);
    };

    const toggleRateModal = () => {
        setIsRateModalVisible((previousState) => !previousState);
    };

    const handleRateUpdate = (rating) => {
        setRating(rating);
        setIsRated(true);
    };

    const handleReviewOnAppStore = () => {
        router.push('/review');
        setIsRateModalVisible(false);
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
                flex: 1,
            }}
        >
            <Modal
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                isVisible={isRateModalVisible}
                onBackdropPress={toggleRateModal}
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
                            {isReviewed ? 'Thanks!' : 'Enjoying Sober?'}
                        </DefaultText>
                        <DefaultText
                            style={{
                                fontSize: 13,
                            }}
                        >
                            Tap a star to rate Sober
                        </DefaultText>
                    </View>
                    <View
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        <Stars
                            default={rating}
                            disabled={isRated}
                            emptyStar={isRated ? starEmpty : starBlueEmpty}
                            fullStar={star}
                            halfStar={star}
                            starSize={32}
                            update={handleRateUpdate}
                        />
                    </View>
                    {isRated && !isReviewed && <ModalBtn onPress={() => setIsReviewed(true)}>Review</ModalBtn>}
                    {isReviewed && rating > 3 && (
                        <ModalBtn onPress={handleReviewOnAppStore}>Review on app store</ModalBtn>
                    )}
                    <ModalBtn onPress={toggleRateModal}>Cancel</ModalBtn>
                </View>
            </Modal>

            <Header title={'Settings'} />
            <ScrollView style={{ flexGrow: 1 }}>
                <View>
                    <Item icon={<SafeHome style={globalStyles.icon} />} href={'/setup'}>
                        <DefaultText>About</DefaultText>
                    </Item>
                    <Item icon={<Warning style={globalStyles.icon} />} style={{ marginBottom: 16 }} href={'/auth'}>
                        <DefaultText>Disclaimer</DefaultText>
                    </Item>
                    <Item
                        icon={<Notification style={globalStyles.icon} />}
                        secondSlot={
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <DefaultText
                                    style={{
                                        color: COLORS.black,
                                        fontFamily: FONTS.bold,
                                        marginRight: 20,
                                    }}
                                >
                                    8:00 PM
                                </DefaultText>
                                <Switch
                                    onValueChange={toggleSwitchNotifications}
                                    value={isEnabledNotifications}
                                    trackColor={{ false: COLORS.gray, true: COLORS.primary }}
                                    thumbColor={isEnabledNotifications ? COLORS.white : COLORS.bgColor}
                                />
                            </View>
                        }
                    >
                        <View>
                            <DefaultText>Daily Notifications</DefaultText>
                            <Pressable
                                style={{
                                    marginTop: 4,
                                }}
                            >
                                <DefaultText
                                    style={{
                                        color: COLORS.primary,
                                        fontFamily: FONTS.bold,
                                    }}
                                >
                                    Change time
                                </DefaultText>
                            </Pressable>
                        </View>
                    </Item>
                    <Item icon={<Tracking style={globalStyles.icon} />}>
                        <DefaultText>Random Message</DefaultText>
                    </Item>
                    <Item
                        icon={<Remove style={globalStyles.icon} />}
                        style={{ marginBottom: 16 }}
                        secondSlot={
                            <Switch
                                onValueChange={toggleSwitchUser}
                                value={isEnabledResetUser}
                                trackColor={{ false: COLORS.gray, true: COLORS.primary }}
                                thumbColor={isEnabledNotifications ? COLORS.white : COLORS.bgColor}
                            />
                        }
                    >
                        <DefaultText>Reset User</DefaultText>
                    </Item>
                    <Item icon={<Like style={globalStyles.icon} />} onPress={toggleRateModal}>
                        <DefaultText>Rate</DefaultText>
                    </Item>
                    <Item icon={<Edit style={globalStyles.icon} />}>
                        <DefaultText>Email Author</DefaultText>
                    </Item>
                    <Item icon={<Share style={globalStyles.icon} />}>
                        <DefaultText>Share SoberTool</DefaultText>
                    </Item>
                </View>
            </ScrollView>
        </View>
    );
};

export default Settings;
