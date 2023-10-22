import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    codeFieldRoot: {},
    cell: {
        width: 48,
        height: 48,
        fontSize: 14,
        lineHeight: 48,
        textAlign: 'center',
        backgroundColor: '#e5edfa',
        borderRadius: 12,
        overflow: 'hidden',
    },
    focusCell: {
        borderColor: '#000',
    },
});
