import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const MessagesSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 640 512" fill="none">
      <Path
        d="M64 0C28.7 0 0 28.7 0 64V256C0 291.3 28.7 320 64 320H96V368C96 374.1 99.4 379.6 104.8 382.3C110.2 385 116.7 384.4 121.6 380.8L202.7 320H352C387.3 320 416 291.3 416 256V64C416 28.7 387.3 0 352 0H64ZM352 352H256V384C256 419.3 284.7 448 320 448H437.3L518.4 508.8C523.2 512.4 529.7 513 535.2 510.3C540.7 507.6 544 502.1 544 496V448H576C611.3 448 640 419.3 640 384V192C640 156.7 611.3 128 576 128H448V256C448 309 405 352 352 352Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MessagesSvg;
