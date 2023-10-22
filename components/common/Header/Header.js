import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { DefaultText } from '../DefaultText/DefaultText';
import { View } from 'react-native';
import headerBg from '@assets/images/header-bg.png';
import { ProgressCircle } from '../../ProgressCircle/ProgressCircle';
import { Image } from 'expo-image';
import { COLORS, FONTS } from '@constants/theme';
import { globalStyles } from '@styles/globalStyles';

const angle = -102;
const angleInRadians = (angle * Math.PI) / 180;

const startX = Math.sin(angleInRadians);
const startY = -Math.cos(angleInRadians);
const endX = 1 - startX;
const endY = 1 + startY;

export const Header = ({ children, title, isMotivationPage, setHeaderHeight, secondSlot, style }) => {
    return (
        <LinearGradient
            onLayout={(e) => {
                setHeaderHeight && setHeaderHeight(e.nativeEvent.layout.height);
            }}
            colors={[COLORS.primary, COLORS.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: endX, y: endY }}
            style={[styles.wrapper, style]}
        >
            {isMotivationPage && (
                <View style={[styles.reward, globalStyles.shadow]}>
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
            )}
            <View
                style={{
                    marginBottom: children ? 8 : 0,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                {title && <DefaultText style={styles.title}>{title}</DefaultText>}
                {secondSlot && secondSlot}
            </View>
            {children}
            <View style={styles.bg} pointerEvents={'none'}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    source={headerBg}
                />
            </View>
        </LinearGradient>
    );
};
