import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@constants/theme';

export const styles = StyleSheet.create({
    wrapper: {
        padding: 24,
        paddingTop: 68,
        position: 'relative',
    },
    bg: {
        position: 'absolute',
        top: -80,
        right: -125,
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 24,
        fontFamily: FONTS.bold,
        color: COLORS.white,
    },
    reward: {
        padding: 20,
        marginBottom: 16,
        backgroundColor: '#9DD2F5',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
