import { Pressable } from 'react-native';

export const IconButton = ({ icon, ...props }) => {
    return (
        <Pressable
            style={{
                width: 48,
                height: 48,
                marginLeft: -12,
                marginTop: -12,
                marginBottom: -12,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            {...props}
        >
            {icon}
        </Pressable>
    );
};
