import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const CoinsSvg = ({ size = 20, fill = 'white' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
      <Path
        d="M512 80C512 98 497.7 114.6 473.6 128C444.5 144.1 401.1 155.5 351.3 158.9C347.6 157.1 343.9 155.4 340 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98 128 80C128 35.8 214 0 320 0C426 0 512 35.8 512 80ZM160.7 161.1C170.9 160.4 181.4 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 244 383.3 247.9 381.9 251.7C377.3 264.9 364.9 277 346.9 287.2C346.8 287.3 346.6 287.3 346.5 287.4C346.2 287.6 345.9 287.7 345.6 287.9C310.6 307.3 254.8 319.9 192 319.9C132.4 319.9 79.1 308.6 43.8 290.8C41.9 289.9 40.1 288.9 38.3 287.9C14.3 274.6 0 258 0 240C0 205.2 53.4 175.5 128 164.6C138.5 163.1 149.4 161.9 160.7 161.1ZM416 240C416 218.1 405.4 200.1 391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.6 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.6 234.3 435.8 240.6 415.8 245.4C415.9 243.6 416 241.9 416 240.1V240ZM384 336C384 354 369.7 370.6 345.6 384C343.8 385 342 385.9 340.1 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.4 403.4 38.4 384C14.3 370.6 0 354 0 336V300.6C12.5 310.9 27.6 319.3 43.9 326.1C83.4 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6V304V309.7V336ZM416 336V304V278.1C435 273.9 452.5 268.6 468.1 262.1C484.4 255.3 499.6 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336ZM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.6 406.9 384 396.6V432C384 476.2 298 512 192 512C86 512 0 476.2 0 432V396.6C12.5 406.9 27.6 415.3 43.9 422.1C83.4 438.6 135.8 448 192 448Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CoinsSvg;
