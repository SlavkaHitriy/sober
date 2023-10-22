import Svg, { Path } from 'react-native-svg';

export const Arrow = ({ style }) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9 18L15 12L9 6" stroke="#71727C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
};
