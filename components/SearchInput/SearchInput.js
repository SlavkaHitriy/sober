import { Animated, Keyboard, Pressable, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@components/common/Input/Input';
import { COLORS, FONTS } from '@constants/theme';
import { Clear } from '@assets/icons/clear';
import { Search } from '@assets/icons/search';
import { DefaultText } from '@components/common/DefaultText/DefaultText';
import { globalStyles } from '@styles/globalStyles';

export const SearchInput = ({ isFocused, searchValue, setSearchValue, ...props }) => {
    const input = useRef(null);
    const clearInput = useRef(null);
    const [searchAnimMargin] = useState(new Animated.Value(0));
    const [searchAnimWidth] = useState(new Animated.Value(0));

    const clearInputValue = () => {
        clearInput.current && clearInput.current('');
        input.current.clear();
        setSearchValue('');
    };

    const handleBtnPress = () => {
        Keyboard.dismiss();

        if (searchValue.length > 0) {
            input.current.focus();
            clearInputValue();
        }
    };

    const handleCancelBtnPress = () => {
        input.current.blur();
        clearInputValue();
    };

    useEffect(() => {
        Animated.timing(searchAnimMargin, {
            toValue: isFocused ? 16 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();

        Animated.timing(searchAnimWidth, {
            toValue: isFocused ? 60 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isFocused]);

    return (
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
            <View
                style={{
                    position: 'relative',
                    flexGrow: 1,
                }}
            >
                <Input
                    inputRef={input}
                    clearInput={clearInput}
                    icon={
                        <Pressable onPress={handleBtnPress}>
                            {searchValue.length > 0 ? (
                                <Clear style={globalStyles.icon} />
                            ) : (
                                <Search style={globalStyles.icon} />
                            )}
                        </Pressable>
                    }
                    style={{
                        backgroundColor: COLORS.white,
                    }}
                    {...props}
                />
            </View>
            <Pressable
                style={{
                    flexShrink: 0,
                }}
                onPress={handleCancelBtnPress}
            >
                <Animated.View
                    style={{
                        marginLeft: searchAnimMargin,
                        width: searchAnimWidth,
                    }}
                >
                    <DefaultText
                        style={{
                            fontSize: 18,
                            fontFamily: FONTS.bold,
                            color: COLORS.white,
                        }}
                        numberOfLines={1}
                    >
                        Cancel
                    </DefaultText>
                </Animated.View>
            </Pressable>
        </View>
    );
};
