import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const CheckSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 8" fill="none">
      <Path
        d="M9.79076 0.20924C10.0697 0.488227 10.0697 0.941301 9.79076 1.22029L4.07711 6.93394C3.79813 7.21292 3.34505 7.21292 3.06606 6.93394L0.20924 4.07711C-0.0697467 3.79813 -0.0697467 3.34505 0.20924 3.06606C0.488227 2.78708 0.941301 2.78708 1.22029 3.06606L3.5727 5.41625L8.78194 0.20924C9.06093 -0.0697467 9.51401 -0.0697467 9.79299 0.20924H9.79076Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CheckSvg;
