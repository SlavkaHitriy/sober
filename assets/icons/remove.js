import Svg, { Path } from 'react-native-svg';

export const Remove = ({ style }) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                fill="#8B8C97"
            />
            <Path
                d="M17.08 14.16C14.29 12.3 9.73996 12.3 6.92996 14.16C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.14 18.34 14.99 17.08 14.16ZM13.83 18.07H10.18C9.79996 18.07 9.48996 17.76 9.48996 17.38C9.48996 17 9.79996 16.69 10.18 16.69H13.83C14.21 16.69 14.52 17 14.52 17.38C14.52 17.76 14.21 18.07 13.83 18.07Z"
                fill="#8B8C97"
            />
        </Svg>
    );
};
