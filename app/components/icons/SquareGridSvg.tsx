import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const SquareGridSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.9652 10.7911C18.6356 10.7963 19.9898 12.1745 20 13.8797V16.9019C19.9899 18.6086 18.6371 19.9897 16.9652 20H14.0046C12.3343 19.9896 10.9842 18.6071 10.9791 16.9019V13.8797C10.9791 12.1739 12.3337 10.7911 14.0046 10.7911H16.9652ZM4.25058 10.7911C4.56143 10.7571 4.86401 10.9073 5.02984 11.1778C5.19568 11.4484 5.19568 11.7918 5.02984 12.0624C4.86401 12.3329 4.56143 12.4831 4.25058 12.4491H3.0348C2.25932 12.4491 1.62923 13.0881 1.62413 13.8797V16.8641C1.64385 17.6493 2.26544 18.2797 3.0348 18.2947H6.01392C6.3872 18.2972 6.74604 18.1476 7.01086 17.879C7.27568 17.6104 7.4246 17.2451 7.42459 16.8641V12.3828L7.41193 12.2713C7.39793 11.9748 7.54013 11.6893 7.79039 11.5273C8.07192 11.345 8.4337 11.3558 8.70439 11.5544C8.97508 11.753 9.10035 12.0996 9.02088 12.4301V16.8925C9.02088 18.6035 7.66215 19.9905 5.98608 19.9905H3.0348C1.37322 19.9553 0.0344736 18.5887 0 16.8925V13.8797C0 13.0589 0.320029 12.2719 0.889434 11.6924C1.45884 11.1129 2.23078 10.7886 3.0348 10.7911H4.25058ZM16.9652 12.4491H14.0046C13.2307 12.4491 12.6032 13.0896 12.6032 13.8797V16.9019C12.6008 17.2821 12.7476 17.6475 13.011 17.9163C13.2743 18.1852 13.6322 18.3351 14.0046 18.3326H16.9652C17.3376 18.3351 17.6955 18.1852 17.9589 17.9163C18.2222 17.6475 18.3691 17.2821 18.3666 16.9019V13.8797C18.3666 13.5003 18.2189 13.1364 17.9561 12.8681C17.6933 12.5998 17.3369 12.4491 16.9652 12.4491ZM16.9652 0C18.6232 0.0401889 19.9564 1.40542 19.9907 3.09806V6.11085C20.0006 6.93001 19.6913 7.71963 19.1309 8.30597C18.5704 8.89231 17.8048 9.22734 17.0023 9.23733H15.7773C15.3622 9.19197 15.0475 8.83444 15.0475 8.40834C15.0475 7.98224 15.3622 7.6247 15.7773 7.57935H16.9652C17.341 7.57686 17.7002 7.42142 17.9633 7.14752C18.2264 6.87362 18.3715 6.50389 18.3666 6.12032V3.09806C18.3566 2.31222 17.735 1.67766 16.9652 1.66746H14.0046C13.2307 1.66746 12.6032 2.30796 12.6032 3.09806V7.61724L12.5936 7.72116C12.5306 8.129 12.1826 8.43702 11.768 8.43202C11.5522 8.42709 11.3473 8.33414 11.199 8.17393C11.0508 8.01371 10.9716 7.79958 10.9791 7.57935V3.09806C10.9767 2.27727 11.2943 1.48924 11.862 0.907972C12.4296 0.3267 13.2006 0 14.0046 0H16.9652ZM5.99536 0C7.66932 0.00520202 9.02507 1.38921 9.03016 3.09806V6.12032C9.03016 6.94111 8.71013 7.72814 8.14073 8.30764C7.57132 8.88713 6.79939 9.21142 5.99536 9.20892H3.0348C1.36445 9.20374 0.0101775 7.82547 5.10441e-08 6.12032V3.09806C0.0101328 1.39135 1.36294 0.010344 3.0348 0H5.99536ZM5.99536 1.66746H3.0348C2.65833 1.65982 2.29469 1.80716 2.02582 2.07629C1.75696 2.34541 1.60549 2.71366 1.60557 3.09806V6.12032C1.59791 6.50962 1.74603 6.88529 2.01574 7.16062C2.28546 7.43595 2.65345 7.58716 3.0348 7.57935H5.99536C6.37112 7.57686 6.73038 7.42142 6.99346 7.14752C7.25654 6.87362 7.4017 6.50389 7.39675 6.12032V3.09806C7.39169 2.31011 6.76722 1.67262 5.99536 1.66746Z"
        fill={fill}
      />
    </Svg>
  );
};

export default SquareGridSvg;