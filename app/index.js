import { ScrollView, View } from 'react-native';
import { Header } from '@components/common/Header/Header';
import { COLORS, FONTS } from '@constants/theme';
import { EditAvatar } from '@components/EditAvatar/EditAvatar';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { globalStyles } from '@styles/globalStyles';
import { ProgressCircle } from '@components/ProgressCircle/ProgressCircle';
import { Item } from '@components/common/Item/Item';
import { Cup } from '@assets/icons/cup';

const Home = () => {
    return (
        <View style={{ flexGrow: 1, backgroundColor: COLORS.white }}>
            <Header title={'Profile'} />
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingVertical: 16,
                        paddingHorizontal: 24,
                        gap: 16,
                    }}
                >
                    <EditAvatar />
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <DefaultText
                            style={{
                                fontSize: 20,
                                fontFamily: FONTS.bold,
                                marginBottom: 4,
                            }}
                        >
                            Samantha Williams
                        </DefaultText>
                        <DefaultText
                            style={{
                                fontSize: 14,
                                color: COLORS.gray,
                            }}
                        >
                            Sober since Sep 22, 2023
                        </DefaultText>
                    </View>
                </View>

                <View
                    style={{
                        padding: 24,
                        backgroundColor: COLORS.bgColor,
                    }}
                >
                    <View
                        style={[
                            {
                                backgroundColor: COLORS.white,
                                borderRadius: 20,
                                padding: 20,
                            },
                            globalStyles.shadow,
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 16,
                                marginBottom: 12,
                                paddingBottom: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.grayLight,
                            }}
                        >
                            <View>
                                <DefaultText
                                    style={{
                                        color: COLORS.black,
                                        fontFamily: FONTS.bold,
                                        marginBottom: 4,
                                    }}
                                >
                                    1 month, 8 days of freedom! 🎉
                                </DefaultText>
                                <DefaultText
                                    style={{
                                        color: COLORS.grayDark,
                                        fontSize: 14,
                                    }}
                                >
                                    Next Reward: 10 hours, 27 minutes
                                </DefaultText>
                            </View>
                            <View
                                style={{
                                    marginLeft: 8,
                                }}
                            >
                                <ProgressCircle
                                    size={40}
                                    activeColor={'#12CAD5'}
                                    inactiveColor={'#DCF9FA'}
                                    progress={75}
                                    thickness={5}
                                />
                            </View>
                        </View>
                        <DefaultText
                            style={{
                                color: COLORS.gray,
                                fontSize: 14,
                            }}
                        >
                            Savings:{' '}
                            <DefaultText
                                style={{
                                    fontSize: 16,
                                    fontFamily: FONTS.bold,
                                }}
                            >
                                $150.25
                            </DefaultText>
                        </DefaultText>
                    </View>
                </View>

                <View>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                    <Item icon={<Cup />}>
                        <DefaultText>Congrats! 39 days sober</DefaultText>
                    </Item>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
