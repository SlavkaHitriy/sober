import { Pressable, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { DefaultText } from '../DefaultText/DefaultText';
import { COLORS, FONTS } from '@constants/theme';
import CurrencyInput from 'react-native-currency-input';
import { Error } from '@assets/icons/error';
import { globalStyles } from '@styles/globalStyles';
import { Link } from 'expo-router';

export const Input = ({
    onChange,
    inputRef,
    clearInput,
    label,
    multiline,
    style,
    icon,
    withForm,
    symbol,
    helperText,
    isError,
    helperLink,
    ...props
}) => {
    const [inputValue, setInputValue] = useState('');

    const errorStyles = isError
        ? {
              borderColor: '#fda29b',
              borderWidth: 2,
              paddingRight: 48,
          }
        : {};

    const styles = {
        backgroundColor: isError ? '#fff2f1' : '#F1F4FA',
        borderRadius: 12,
        paddingVertical: 13,
        paddingLeft: symbol ? 24 : 16,
        paddingRight: icon ? 48 : 16,
        height: multiline ? 100 : 48,
        lineHeight: multiline ? 22 : 16,
        display: 'flex',
        alignItems: 'center',
        ...errorStyles,
        ...style,
    };

    const handleChange = (e) => {
        setInputValue(e);
        onChange && onChange(e);
    };

    useEffect(() => {
        if (clearInput) {
            clearInput.current = setInputValue;
        }
    }, [clearInput]);

    return (
        <View
            style={{
                flexGrow: 1,
                position: 'relative',
            }}
        >
            {label && (
                <View
                    style={{
                        marginBottom: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                    }}
                >
                    <DefaultText style={{ fontSize: 14, fontFamily: FONTS.bold }}>{label}</DefaultText>
                    {helperLink && (
                        <Link
                            href={'/auth/forgot-password'}
                            style={{
                                fontSize: 14,
                                fontFamily: FONTS.bold,
                                color: COLORS.primary,
                            }}
                        >
                            Forgot password?
                        </Link>
                    )}
                </View>
            )}
            {symbol ? (
                <CurrencyInput
                    ref={inputRef}
                    delimiter=","
                    separator="."
                    style={styles}
                    precision={0}
                    onChangeValue={withForm ? props.onChangeText : handleChange}
                    value={withForm ? props.value : inputValue}
                />
            ) : (
                <TextInput
                    multiline={multiline}
                    ref={inputRef}
                    style={styles}
                    placeholderTextColor={COLORS.grayDark}
                    onChangeText={withForm ? props.onChangeText : handleChange}
                    value={withForm ? props.value : inputValue}
                    {...props}
                />
            )}
            {helperText && (
                <DefaultText style={{ marginTop: 4, fontSize: 12, color: isError ? COLORS.red : COLORS.gray }}>
                    {helperText}
                </DefaultText>
            )}
            {icon && (
                <Pressable
                    style={{
                        position: 'absolute',
                        right: 16,
                        bottom: 12,
                    }}
                >
                    {icon}
                </Pressable>
            )}
            {isError && (
                <Pressable
                    style={{
                        position: 'absolute',
                        right: 16,
                        bottom: 28,
                    }}
                >
                    <Error style={globalStyles.icon} />
                </Pressable>
            )}
            {symbol && (
                <DefaultText
                    style={{
                        position: 'absolute',
                        left: 12,
                        bottom: 12,
                        lineHeight: 26,
                    }}
                >
                    {symbol}
                </DefaultText>
            )}
        </View>
    );
};
