import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const CheckCircleSvg = ({
  size = 20,
  fill = 'white',
  variant = 'solid',
}: IconProps) => {
  if (variant === 'solid') {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45313 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70313 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z"
          fill={fill}
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.1914 7.94141C14.4336 7.69922 14.4336 7.30078 14.1914 7.05859C13.9492 6.81641 13.5508 6.81641 13.3086 7.05859L8.75 11.6172L6.69141 9.55859C6.44922 9.31641 6.05078 9.31641 5.80859 9.55859C5.56641 9.80078 5.56641 10.1992 5.80859 10.4414L8.30859 12.9414C8.55078 13.1836 8.94922 13.1836 9.19141 12.9414L14.1914 7.94141Z"
          fill={fill}
        />
      </Svg>
    );
  }
};

export default CheckCircleSvg;
