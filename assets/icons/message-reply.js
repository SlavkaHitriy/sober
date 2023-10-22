import Svg, { Path } from 'react-native-svg';

export const MessageReply = ({ style }) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M8.50049 18.9998H8.00049C4.00049 18.9998 2.00049 17.9998 2.00049 12.9998V7.99976C2.00049 3.99976 4.00049 1.99976 8.00049 1.99976H16.0005C20.0005 1.99976 22.0005 3.99976 22.0005 7.99976V12.9998C22.0005 16.9998 20.0005 18.9998 16.0005 18.9998H15.5005C15.1905 18.9998 14.8905 19.1498 14.7005 19.3998L13.2005 21.3998C12.5405 22.2798 11.4605 22.2798 10.8005 21.3998L9.30049 19.3998C9.14049 19.1798 8.77049 18.9998 8.50049 18.9998Z"
                fill="#128CDD"
            />
        </Svg>
    );
};