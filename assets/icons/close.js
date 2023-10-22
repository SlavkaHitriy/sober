import Svg, { Path } from 'react-native-svg';

export const Close = ({ style }) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M17 7L7 17M7 7L17 17"
                stroke="#71727C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
