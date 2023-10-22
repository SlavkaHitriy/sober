import { Animated, ScrollView, View } from 'react-native';
import { useEffect, useState } from 'react';
import HighlightText from '@sanar/react-native-highlight-text';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { homeData } from '@mocks/home';
import { Message } from '@assets/icons/message';
import { Arrow } from '@assets/icons/arrow';
import { globalStyles } from '@styles/globalStyles';
import { Item } from '@components/common/Item/Item';

const Motivation = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [headerAnim] = useState(new Animated.Value(0));
    const [headerAnimTranslate] = useState(new Animated.Value(0));
    const [headerTransition, setHeaderTransition] = useState(0);

    const handleInputFocus = () => {
        setIsFocused(true);
        setHeaderTransition(-headerHeight);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
        setHeaderTransition(0);
    };

    useEffect(() => {
        Animated.timing(headerAnim, {
            toValue: isFocused ? headerTransition + 130 : headerTransition,
            duration: 300,
            useNativeDriver: false,
        }).start();

        Animated.timing(headerAnimTranslate, {
            toValue: isFocused ? -100 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [headerTransition]);

    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
                flex: 1,
            }}
        >
            <Animated.View keyboardShouldPersistTaps="handled" style={{ marginTop: headerAnim }}>
                <Header setHeaderHeight={setHeaderHeight} title={'Motivation'} isMotivationPage={true}>
                    <Animated.View
                        style={{
                            transform: [{ translateY: headerAnimTranslate }],
                            marginBottom: 24,
                        }}
                    >
                        <DefaultText style={{ color: COLORS.white, lineHeight: 24 }}>
                            Tap a question or search below
                        </DefaultText>
                    </Animated.View>
                    <SearchInput
                        isFocused={isFocused}
                        placeholder={'Search here'}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChange={setSearchValue}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </Header>
                <ScrollView>
                    {homeData.map((item) => (
                        <Item key={item.id} icon={<Message style={globalStyles.icon} />} href={`/forum/${item.id}`}>
                            <DefaultText
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <HighlightText
                                    highlightStyle={{
                                        fontFamily: FONTS.bold,
                                    }}
                                    searchWords={[searchValue]}
                                    textToHighlight={item.text}
                                />
                            </DefaultText>
                        </Item>
                    ))}
                </ScrollView>
            </Animated.View>
        </View>
    );
};

export default Motivation;
