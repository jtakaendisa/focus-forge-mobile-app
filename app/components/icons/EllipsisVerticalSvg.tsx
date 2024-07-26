import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const EllipsisVerticalSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 6 20" fill="none">
      <Path
        d="M2.59259 14.8148C1.90499 14.8148 1.24556 15.088 0.759353 15.5742C0.273147 16.0604 0 16.7198 0 17.4074C0 18.095 0.273147 18.7544 0.759353 19.2406C1.24556 19.7269 1.90499 20 2.59259 20C3.28019 20 3.93963 19.7269 4.42583 19.2406C4.91204 18.7544 5.18519 18.095 5.18519 17.4074C5.18519 16.7198 4.91204 16.0604 4.42583 15.5742C3.93963 15.088 3.28019 14.8148 2.59259 14.8148ZM2.59259 7.40741C1.90499 7.40741 1.24556 7.68055 0.759353 8.16676C0.273147 8.65297 0 9.3124 0 10C0 10.6876 0.273147 11.347 0.759353 11.8332C1.24556 12.3194 1.90499 12.5926 2.59259 12.5926C3.28019 12.5926 3.93963 12.3194 4.42583 11.8332C4.91204 11.347 5.18519 10.6876 5.18519 10C5.18519 9.3124 4.91204 8.65297 4.42583 8.16676C3.93963 7.68055 3.28019 7.40741 2.59259 7.40741ZM5.18519 2.59259C5.18519 1.90499 4.91204 1.24556 4.42583 0.759353C3.93963 0.273147 3.28019 0 2.59259 0C1.90499 0 1.24556 0.273147 0.759353 0.759353C0.273147 1.24556 0 1.90499 0 2.59259C0 3.28019 0.273147 3.93963 0.759353 4.42583C1.24556 4.91204 1.90499 5.18519 2.59259 5.18519C3.28019 5.18519 3.93963 4.91204 4.42583 4.42583C4.91204 3.93963 5.18519 3.28019 5.18519 2.59259Z"
        fill={fill}
      />
    </Svg>
  );
};

export default EllipsisVerticalSvg;