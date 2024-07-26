import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@/app/entities';

const BinSvg = ({ size = 20, fill = 'white', variant = 'solid' }: IconProps) => {
  if (variant === 'solid') {
    return (
      <Svg width={size} height={size} viewBox="0 0 21 24" fill="none">
        <Path
          d="M7.67813 0H13.3219C13.8891 0 14.4094 0.31875 14.6625 0.829688L15 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H1.5C0.670312 4.5 0 3.82969 0 3C0 2.17031 0.670312 1.5 1.5 1.5H6L6.3375 0.829688C6.59062 0.31875 7.11094 0 7.67813 0ZM1.5 6H19.5L18.5062 21.8906C18.4312 23.0766 17.4469 24 16.2609 24H4.73906C3.55312 24 2.56875 23.0766 2.49375 21.8906L1.5 6ZM6.70312 11.2031C6.2625 11.6437 6.2625 12.3562 6.70312 12.7922L8.90625 14.9953L6.70312 17.1984C6.2625 17.6391 6.2625 18.3516 6.70312 18.7875C7.14375 19.2234 7.85625 19.2281 8.29219 18.7875L10.4953 16.5844L12.6984 18.7875C13.1391 19.2281 13.8516 19.2281 14.2875 18.7875C14.7234 18.3469 14.7281 17.6344 14.2875 17.1984L12.0844 14.9953L14.2875 12.7922C14.7281 12.3516 14.7281 11.6391 14.2875 11.2031C13.8469 10.7672 13.1344 10.7625 12.6984 11.2031L10.4953 13.4062L8.29219 11.2031C7.85156 10.7625 7.13906 10.7625 6.70312 11.2031Z"
          fill={fill}
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 22" fill="none">
        <Path
          d="M7.32617 2.21719L6.50977 3.4375H12.7402L11.9238 2.21719C11.8594 2.12266 11.752 2.0625 11.6359 2.0625H7.60977C7.49375 2.0625 7.38633 2.11836 7.32187 2.21719H7.32617ZM13.6426 1.07422L15.2195 3.4375H15.8082H17.875H18.2188C18.7902 3.4375 19.25 3.89727 19.25 4.46875C19.25 5.04023 18.7902 5.5 18.2188 5.5H17.7203L16.6891 19.452C16.5816 20.8871 15.3871 22 13.9477 22H5.30234C3.86289 22 2.66836 20.8871 2.56094 19.452L1.52969 5.5H1.03125C0.459766 5.5 0 5.04023 0 4.46875C0 3.89727 0.459766 3.4375 1.03125 3.4375H1.375H3.4418H4.03047L5.60742 1.06992C6.0543 0.403906 6.80625 0 7.60977 0H11.6359C12.4395 0 13.1914 0.403906 13.6383 1.06992L13.6426 1.07422ZM3.59648 5.5L4.61914 19.3016C4.64492 19.6625 4.9457 19.9375 5.30664 19.9375H13.9477C14.3086 19.9375 14.6051 19.6582 14.6352 19.3016L15.6535 5.5H3.59648ZM6.26914 9.01914C6.6043 8.68398 7.15 8.68398 7.48516 9.01914L9.625 11.159L11.7691 9.01484C12.1043 8.67969 12.65 8.67969 12.9852 9.01484C13.3203 9.35 13.3203 9.8957 12.9852 10.2309L10.841 12.375L12.9852 14.5191C13.3203 14.8543 13.3203 15.4 12.9852 15.7352C12.65 16.0703 12.1043 16.0703 11.7691 15.7352L9.625 13.591L7.48086 15.7352C7.1457 16.0703 6.6 16.0703 6.26484 15.7352C5.92969 15.4 5.92969 14.8543 6.26484 14.5191L8.40898 12.375L6.26484 10.2309C5.92969 9.8957 5.92969 9.35 6.26484 9.01484L6.26914 9.01914Z"
          fill={fill}
        />
      </Svg>
    );
  }
};

export default BinSvg;
