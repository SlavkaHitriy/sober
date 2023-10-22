import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/theme';

export const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 70,
        width: '100%',
        backgroundColor: COLORS.white,
        borderBottomColor: 'rgba(222, 222, 222, 0.50)',
        borderBottomWidth: 1,
        shadowColor: 'rgb(18, 18, 18)',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowRadius: 8,
        shadowOpacity: 0.04,
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    iconWrapper: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 12,
        color: COLORS.gray,
        letterSpacing: 0.5,
    },
});
