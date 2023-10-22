import Svg, { Path } from 'react-native-svg';

export const ArrowLong = ({ style }) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20 12H4M4 12L10 18M4 12L10 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
};
