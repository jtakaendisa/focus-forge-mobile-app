import { IconProps } from '@/app/entities';
import Svg, { Path, Rect } from 'react-native-svg';

const CalendarStartSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 22" fill="none">
      <Path
        d="M19.1102 1.55977H17.5504V3.93164C17.5504 4.37422 17.2109 4.70938 16.7727 4.70938H13.6188C13.1762 4.70938 12.841 4.36992 12.841 3.93164V1.55977H8.09297V3.93164C8.09297 4.37422 7.75352 4.70938 7.31524 4.70938H4.16133C3.71875 4.70938 3.38359 4.36992 3.38359 3.93164V1.55977H1.81953C0.938672 1.55977 0.259766 2.27305 0.259766 3.11953V20.4402C0.259766 21.3211 0.973047 22 1.81953 22H19.1402C20.0211 22 20.7 21.2867 20.7 20.4402V3.15391C20.7043 2.27305 19.991 1.55977 19.1102 1.55977ZM19.1102 20.4746H1.81953V6.30352H19.1402V20.4746H19.1102ZM6.5332 3.15391H4.97344V1.03301e-07H6.5332V3.15391ZM15.9906 3.15391H14.4309V1.03301e-07H15.9906V3.15391Z"
        fill={fill}
      />
      <Rect x="3" y="8" width={size / 4} height={size / 4} fill={fill} />
    </Svg>
  );
};

export default CalendarStartSvg;
