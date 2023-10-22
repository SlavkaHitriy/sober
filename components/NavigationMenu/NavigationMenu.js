import { View } from 'react-native';
import { styles } from './styles';
import { DefaultText } from '../common/DefaultText/DefaultText';
import { Link, usePathname } from 'expo-router';
import { Profile } from '@assets/icons/profile';
import { Favorites } from '@assets/icons/favorites';
import { Motivation } from '@assets/icons/motivation';
import { Community } from '@assets/icons/community';
import { COLORS } from '@constants/theme';
import { Settings } from '@assets/icons/settings';
import { useEffect } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const menuItems = [
    {
        title: 'Profile',
        link: '/',
        Icon: Profile,
    },
    {
        title: 'Motivation',
        link: '/motivation',
        Icon: Motivation,
    },
    {
        title: 'Community',
        link: '/community',
        Icon: Community,
    },
    {
        title: 'Favorites',
        link: '/favorites',
        Icon: Favorites,
    },
    {
        title: 'Settings',
        link: '/settings',
        Icon: Settings,
    },
];

export const NavigationMenu = ({ isHiddenMenu }) => {
    const translateY = useSharedValue(0);
    const routePath = usePathname();

    useEffect(() => {
        if (isHiddenMenu) {
            translateY.value = withSpring(70);
        } else {
            translateY.value = withSpring(0);
        }
    }, [isHiddenMenu]);

    return (
        <Animated.View
            style={[
                styles.wrapper,
                {
                    transform: [
                        {
                            translateY,
                        },
                    ],
                },
            ]}
        >
            <View style={styles.inner}>
                {menuItems.map(({ title, Icon, link }) => (
                    <Link replace key={title} href={link}>
                        <View style={styles.item}>
                            <View style={styles.iconWrapper}>
                                <Icon
                                    style={[
                                        styles.icon,
                                        {
                                            fill: routePath === link ? COLORS.primary : COLORS.gray,
                                        },
                                    ]}
                                />
                            </View>
                            <DefaultText
                                style={[
                                    styles.text,
                                    {
                                        color: routePath === link ? COLORS.primary : COLORS.gray,
                                    },
                                ]}
                            >
                                {title}
                            </DefaultText>
                        </View>
                    </Link>
                ))}
            </View>
        </Animated.View>
    );
};
