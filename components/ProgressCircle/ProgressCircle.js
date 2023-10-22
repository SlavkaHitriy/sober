import Svg, { Circle } from 'react-native-svg';

export const ProgressCircle = ({ size, activeColor, inactiveColor, thickness, progress, style }) => {
    const radius = (size - thickness * 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <Svg
            style={{
                transform: [{ rotate: '-90deg' }],
                ...style,
            }}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={inactiveColor}
                strokeWidth={thickness}
            />

            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={activeColor}
                strokeWidth={thickness}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap={'round'}
            />
        </Svg>
    );
};
