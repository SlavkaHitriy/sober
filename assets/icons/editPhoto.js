import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const EditPhoto = ({ style }) => {
    return (
        <Svg style={style} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_385_1155)">
                <Path
                    d="M11.9999 6.66671L9.33319 4.00004M1.6665 14.3334L3.92275 14.0827C4.19841 14.0521 4.33624 14.0367 4.46507 13.995C4.57936 13.958 4.68814 13.9058 4.78843 13.8396C4.90147 13.7651 4.99953 13.667 5.19565 13.4709L13.9999 4.66671C14.7362 3.93033 14.7362 2.73642 13.9999 2.00004C13.2635 1.26366 12.0696 1.26366 11.3332 2.00004L2.52899 10.8042C2.33287 11.0003 2.23481 11.0984 2.16026 11.2114C2.09413 11.3117 2.04185 11.4205 2.00485 11.5348C1.96314 11.6636 1.94783 11.8015 1.9172 12.0771L1.6665 14.3334Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_385_1155">
                    <Rect width="16" height="16" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
