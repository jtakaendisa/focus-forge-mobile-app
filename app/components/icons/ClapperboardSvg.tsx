import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const ClapperboardSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 448" fill="none">
      <Path
        d="M453.8 0.299999L327 127L326 128H233.9L361 1L362 0H448C450 0 451.9 0.0999992 453.8 0.299999ZM393.9 128L498 24C506.8 35 512 48.9 512 64V128H393.9ZM201.9 0H294L167 127L166 128H73.9L201 1L202 0H201.9ZM134 0L7 127L6 128H0V64C0 28.7 28.7 0 64 0H134.1H134ZM0 160H512V384C512 419.3 483.3 448 448 448H64C28.7 448 0 419.3 0 384V160ZM216.5 225.9C211.3 228.7 208 234.1 208 240V368C208 373.9 211.2 379.3 216.5 382.1C221.8 384.9 228 384.6 232.9 381.3L328.9 317.3C333.3 314.3 336 309.3 336 304C336 298.7 333.3 293.7 328.9 290.7L232.9 226.7C228 223.4 221.7 223.1 216.5 225.9Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClapperboardSvg;