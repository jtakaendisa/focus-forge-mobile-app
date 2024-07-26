import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const MagnifyingGlassSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.0529 9.77865C18.0529 8.69206 17.8389 7.61611 17.4231 6.61223C17.0072 5.60836 16.3978 4.69621 15.6294 3.92788C14.8611 3.15954 13.9489 2.55007 12.9451 2.13425C11.9412 1.71843 10.8652 1.50441 9.77865 1.50441C8.69206 1.50441 7.61611 1.71843 6.61223 2.13425C5.60836 2.55007 4.69621 3.15954 3.92788 3.92788C3.15954 4.69621 2.55007 5.60836 2.13425 6.61223C1.71843 7.61611 1.50441 8.69206 1.50441 9.77865C1.50441 10.8652 1.71843 11.9412 2.13425 12.9451C2.55007 13.9489 3.15954 14.8611 3.92788 15.6294C4.69621 16.3978 5.60836 17.0072 6.61223 17.4231C7.61611 17.8389 8.69206 18.0529 9.77865 18.0529C10.8652 18.0529 11.9412 17.8389 12.9451 17.4231C13.9489 17.0072 14.8611 16.3978 15.6294 15.6294C16.3978 14.8611 17.0072 13.9489 17.4231 12.9451C17.8389 11.9412 18.0529 10.8652 18.0529 9.77865ZM16.1395 17.2067C14.4329 18.6735 12.2092 19.5573 9.77865 19.5573C4.37689 19.5573 0 15.1804 0 9.77865C0 4.37689 4.37689 0 9.77865 0C15.1804 0 19.5573 4.37689 19.5573 9.77865C19.5573 12.2092 18.6735 14.4329 17.2067 16.1395L24 22.9375L22.9375 24L16.1395 17.2067Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MagnifyingGlassSvg;
