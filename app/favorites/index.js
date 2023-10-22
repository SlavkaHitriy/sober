import { ScrollView, View } from 'react-native';
import { Header } from '@components/common/Header/Header';
import { COLORS, FONTS } from '@constants/theme';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { DefaultButton } from '@components/common/DefaultButton/DefaultButton';
import { useRouter } from 'expo-router';
import favorites from '@assets/images/favorites.png';
import { Image } from 'expo-image';
import { Item } from '@components/common/Item/Item';
import { Message } from '@assets/icons/message';
import { globalStyles } from '@styles/globalStyles';

const Favorites = () => {
    const router = useRouter();

    const goToMotivation = () => {
        router.replace('/motivation');
    };

    return (
        <View style={{ flexGrow: 1, backgroundColor: COLORS.bgColor }}>
            <Header title={'Favorites'} />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 24,
                    padding: 24,
                }}
            >
                <Image
                    style={{
                        width: 140,
                        height: 140,
                        marginBottom: -12,
                    }}
                    contentFit={'contain'}
                    source={favorites}
                />
                <View>
                    <DefaultText
                        style={{
                            textAlign: 'center',
                            fontSize: 24,
                            fontFamily: FONTS.bold,
                            marginBottom: 8,
                        }}
                    >
                        No favorites yet
                    </DefaultText>
                    <DefaultText
                        style={{
                            textAlign: 'center',
                            color: COLORS.gray,
                            lineHeight: 22,
                            maxWidth: 300,
                        }}
                    >
                        To save an item to your favorites, tap the heart icon on message
                    </DefaultText>
                </View>
                <View
                    style={{
                        width: '100%',
                    }}
                >
                    <DefaultButton onPress={goToMotivation}>Back to browsing</DefaultButton>
                </View>
            </View>
            {/*<ScrollView*/}
            {/*    style={{*/}
            {/*        flex: 1,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <View>*/}
            {/*        <Item icon={<Message style={globalStyles.icon} />}>*/}
            {/*            <DefaultText*/}
            {/*                style={{*/}
            {/*                    flexGrow: 1,*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                Craving or having relapse thoughts?*/}
            {/*            </DefaultText>*/}
            {/*        </Item>*/}
            {/*        <Item icon={<Message style={globalStyles.icon} />}>*/}
            {/*            <DefaultText*/}
            {/*                style={{*/}
            {/*                    flexGrow: 1,*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                Want to feel better?*/}
            {/*            </DefaultText>*/}
            {/*        </Item>*/}
            {/*        <Item icon={<Message style={globalStyles.icon} />}>*/}
            {/*            <DefaultText*/}
            {/*                style={{*/}
            {/*                    flexGrow: 1,*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                Need motivation?*/}
            {/*            </DefaultText>*/}
            {/*        </Item>*/}
            {/*    </View>*/}
            {/*</ScrollView>*/}
        </View>
    );
};

export default Favorites;
