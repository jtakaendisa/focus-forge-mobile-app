import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const BookSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 448 512" fill="none">
      <Path
        d="M96 0C43 0 0 43 0 96V416C0 469 43 512 96 512H384H416C433.7 512 448 497.7 448 480C448 462.3 433.7 448 416 448V384C433.7 384 448 369.7 448 352V32C448 14.3 433.7 0 416 0H384H96ZM96 384H352V448H96C78.3 448 64 433.7 64 416C64 398.3 78.3 384 96 384ZM128 144C128 135.2 135.2 128 144 128H336C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H144C135.2 160 128 152.8 128 144ZM144 192H336C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H144C135.2 224 128 216.8 128 208C128 199.2 135.2 192 144 192Z"
        fill={fill}
      />
    </Svg>
  );
};

export default BookSvg;
