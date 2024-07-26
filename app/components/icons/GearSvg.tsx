import { IconProps } from '@/app/entities';
import Svg, { Path } from 'react-native-svg';

const GearSvg = ({ size = 20, fill = 'white', variant = 'solid' }: IconProps) => {
  if (variant === 'solid') {
    return (
      <Svg width={size} height={size} viewBox="0 0 19 20" fill="none">
        <Path
          d="M18.802 6.50908C18.927 6.84899 18.8216 7.22797 18.552 7.47021L16.8602 9.00957C16.9032 9.33386 16.9267 9.66595 16.9267 10.002C16.9267 10.338 16.9032 10.6701 16.8602 10.9943L18.552 12.5337C18.8216 12.7759 18.927 13.1549 18.802 13.4948C18.6301 13.9598 18.423 14.4052 18.1847 14.8349L18.0011 15.1514C17.7432 15.5812 17.4541 15.9875 17.1376 16.3704C16.9071 16.6517 16.5242 16.7455 16.1804 16.6361L14.0042 15.9445C13.4807 16.3469 12.9024 16.6829 12.2851 16.9369L11.7967 19.1678C11.7186 19.5233 11.4451 19.8047 11.0857 19.8633C10.5465 19.9531 9.99171 20 9.42519 20C8.85867 20 8.30388 19.9531 7.76471 19.8633C7.40526 19.8047 7.13177 19.5233 7.05363 19.1678L6.56526 16.9369C5.94795 16.6829 5.36971 16.3469 4.84617 15.9445L2.67387 16.64C2.33005 16.7494 1.94717 16.6517 1.71665 16.3743C1.40019 15.9914 1.11107 15.5851 0.853204 15.1553L0.669574 14.8388C0.431247 14.4091 0.224175 13.9637 0.0522663 13.4987C-0.0727581 13.1588 0.0327313 12.7798 0.302315 12.5376L1.99405 10.9982C1.95107 10.6701 1.92763 10.338 1.92763 10.002C1.92763 9.66595 1.95107 9.33386 1.99405 9.00957L0.302315 7.47021C0.0327313 7.22797 -0.0727581 6.84899 0.0522663 6.50908C0.224175 6.04415 0.431247 5.59875 0.669574 5.16898L0.853204 4.85251C1.11107 4.42274 1.40019 4.01641 1.71665 3.63352C1.94717 3.35222 2.33005 3.25845 2.67387 3.36785L4.85008 4.05939C5.37362 3.65696 5.95186 3.32096 6.56916 3.06701L7.05754 0.836101C7.13568 0.480563 7.40917 0.199258 7.76862 0.140652C8.30778 0.0468842 8.86258 0 9.4291 0C9.99561 0 10.5504 0.0468842 11.0896 0.136745C11.449 0.195351 11.7225 0.476656 11.8007 0.832194L12.289 3.0631C12.9063 3.31705 13.4846 3.65306 14.0081 4.05548L16.1843 3.36394C16.5281 3.25454 16.911 3.35222 17.1415 3.62962C17.458 4.0125 17.7471 4.41883 18.005 4.8486L18.1886 5.16507C18.4269 5.59484 18.634 6.04024 18.8059 6.50518L18.802 6.50908ZM9.4291 13.1276C10.2581 13.1276 11.0531 12.7983 11.6392 12.2121C12.2254 11.6259 12.5547 10.8309 12.5547 10.002C12.5547 9.17299 12.2254 8.37798 11.6392 7.79181C11.0531 7.20565 10.2581 6.87634 9.4291 6.87634C8.60013 6.87634 7.80512 7.20565 7.21896 7.79181C6.63279 8.37798 6.30349 9.17299 6.30349 10.002C6.30349 10.8309 6.63279 11.6259 7.21896 12.2121C7.80512 12.7983 8.60013 13.1276 9.4291 13.1276Z"
          fill={fill}
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M8.72241 1.47656C8.73803 1.41797 8.77319 1.36719 8.81616 1.32812C9.20288 1.27734 9.59741 1.25 9.99975 1.25C10.4021 1.25 10.7966 1.27734 11.1833 1.32812C11.2263 1.36719 11.2576 1.41797 11.2771 1.47656L11.8123 3.33984C11.949 3.8125 12.2888 4.16406 12.6912 4.35938C12.988 4.5 13.2693 4.66406 13.5388 4.84766C13.906 5.10156 14.3865 5.21875 14.863 5.10156L16.7458 4.63281C16.8044 4.61719 16.863 4.62109 16.9177 4.64062C17.1287 4.91016 17.324 5.19531 17.4998 5.49219L17.6677 5.78125C17.8318 6.07422 17.9763 6.37891 18.1052 6.69141C18.0935 6.75 18.0662 6.80469 18.0232 6.84766L16.6716 8.24219C16.3318 8.59375 16.1951 9.06641 16.2302 9.51172C16.2419 9.67188 16.2498 9.83594 16.2498 10C16.2498 10.1641 16.2419 10.3281 16.2302 10.4883C16.1951 10.9336 16.3318 11.4062 16.6716 11.7578L18.0193 13.1523C18.0623 13.1953 18.0896 13.25 18.1013 13.3086C17.9724 13.6211 17.8279 13.9258 17.6638 14.2227L17.4998 14.5078C17.3201 14.8047 17.1248 15.0859 16.9177 15.3594C16.863 15.3789 16.8044 15.3789 16.7458 15.3672L14.863 14.8984C14.3865 14.7812 13.9099 14.8984 13.5388 15.1523C13.2693 15.3359 12.988 15.5 12.6912 15.6406C12.2888 15.832 11.9451 16.1875 11.8123 16.6602L11.2771 18.5234C11.2615 18.582 11.2263 18.6328 11.1833 18.6719C10.7966 18.7227 10.4021 18.75 9.99975 18.75C9.59741 18.75 9.20288 18.7227 8.81616 18.6719C8.77319 18.6328 8.74194 18.582 8.72241 18.5234L8.18725 16.6602C8.05053 16.1875 7.71069 15.8359 7.30835 15.6406C7.01147 15.5 6.73022 15.3359 6.46069 15.1523C6.0935 14.8984 5.61303 14.7812 5.13647 14.8984L3.25366 15.3672C3.19506 15.3828 3.13647 15.3789 3.08178 15.3594C2.87085 15.0859 2.67553 14.8047 2.49585 14.5078L2.33178 14.2227C2.16772 13.9297 2.02319 13.625 1.89428 13.3086C1.906 13.25 1.93335 13.1953 1.97631 13.1523L3.32788 11.7578C3.66772 11.4062 3.80444 10.9336 3.76928 10.4883C3.75756 10.3281 3.74975 10.1641 3.74975 10C3.74975 9.83594 3.75756 9.67188 3.76928 9.51172C3.80444 9.06641 3.66772 8.59375 3.32788 8.24219L1.98022 6.84375C1.93725 6.80078 1.90991 6.74609 1.89819 6.6875C2.0271 6.375 2.17163 6.07031 2.33569 5.77344L2.49975 5.48828C2.67944 5.19141 2.87475 4.91016 3.08569 4.63672C3.14038 4.61719 3.19897 4.61719 3.25756 4.62891L5.14038 5.09766C5.61694 5.21484 6.0935 5.09766 6.4646 4.84375C6.73413 4.66016 7.01538 4.49609 7.31225 4.35547C7.71459 4.16406 8.05834 3.80859 8.19116 3.33594L8.72631 1.47266L8.72241 1.47656ZM9.99975 0C9.49194 0 8.98803 0.0390625 8.49975 0.113281C8.43335 0.125 8.36694 0.144531 8.30444 0.175781C7.93335 0.367188 7.64428 0.707031 7.52319 1.13281L6.98803 2.99609C6.96459 3.08203 6.89038 3.17188 6.76928 3.23047C6.41381 3.39844 6.07397 3.59766 5.75366 3.81641C5.64428 3.89062 5.5271 3.91016 5.44116 3.88672L3.55835 3.41797C3.13256 3.3125 2.69506 3.39453 2.3435 3.61719C2.28491 3.65234 2.23413 3.69922 2.19116 3.75391C1.91381 4.10156 1.656 4.46484 1.42553 4.84766L1.42163 4.85938L1.24975 5.15625L1.24585 5.16797C1.03491 5.55078 0.847408 5.94531 0.687252 6.35547C0.663814 6.41797 0.648189 6.48438 0.644283 6.55078C0.624752 6.97266 0.773189 7.39453 1.08178 7.71484L2.42944 9.10938C2.49194 9.17578 2.53491 9.28125 2.52319 9.41406C2.50756 9.60938 2.49975 9.80469 2.49975 10C2.49975 10.1953 2.50756 10.3945 2.52319 10.5859C2.53491 10.7188 2.49194 10.8281 2.42944 10.8906L1.08178 12.2891C0.773189 12.6094 0.624752 13.0312 0.644283 13.4531C0.648189 13.5195 0.663814 13.5859 0.687252 13.6484C0.847408 14.0586 1.03491 14.4531 1.24585 14.8359L1.24975 14.8477L1.42163 15.1445L1.42553 15.1562C1.656 15.5391 1.90991 15.9062 2.19116 16.2539C2.23413 16.3086 2.28491 16.3555 2.3435 16.3906C2.69506 16.6133 3.13256 16.6953 3.55835 16.5898L5.44116 16.1211C5.5271 16.0977 5.64428 16.1172 5.75366 16.1914C6.07397 16.4141 6.41381 16.6094 6.76928 16.7773C6.89038 16.8359 6.96069 16.9258 6.98803 17.0117L7.52319 18.8672C7.64428 19.2891 7.93335 19.6289 8.30444 19.8242C8.36694 19.8555 8.42944 19.8789 8.49975 19.8867C8.98803 19.9609 9.49194 20 9.99975 20C10.5076 20 11.0115 19.9609 11.4998 19.8867C11.5662 19.875 11.6326 19.8555 11.6951 19.8242C12.0662 19.6328 12.3552 19.293 12.4763 18.8672L13.0115 17.0039C13.0349 16.918 13.1091 16.8281 13.2302 16.7695C13.5857 16.6016 13.9255 16.4023 14.2458 16.1836C14.3552 16.1094 14.4724 16.0898 14.5583 16.1133L16.4412 16.582C16.8669 16.6875 17.3044 16.6094 17.656 16.3828C17.7146 16.3477 17.7654 16.3008 17.8083 16.2461C18.0857 15.8984 18.3396 15.5352 18.5701 15.1523L18.574 15.1406L18.7498 14.8438L18.7537 14.832C18.9646 14.4531 19.1521 14.0547 19.3123 13.6445C19.3357 13.582 19.3513 13.5156 19.3552 13.4492C19.3748 13.0273 19.2263 12.6055 18.9177 12.2852L17.5701 10.8906C17.5076 10.8242 17.4646 10.7188 17.4763 10.5859C17.4919 10.3906 17.4998 10.1953 17.4998 10C17.4998 9.80469 17.4919 9.60547 17.4763 9.41406C17.4646 9.28125 17.5076 9.17188 17.5701 9.10938L18.9177 7.71484C19.2263 7.39453 19.3748 6.97266 19.3552 6.55078C19.3513 6.48438 19.3357 6.41797 19.3123 6.35547C19.1521 5.94531 18.9646 5.55078 18.7537 5.16797L18.7498 5.15625L18.5779 4.85938L18.574 4.84766C18.3435 4.46484 18.0896 4.09766 17.8123 3.75391C17.7693 3.69922 17.7185 3.65234 17.6599 3.61719C17.3083 3.39453 16.8708 3.3125 16.4451 3.41797L14.5623 3.88672C14.4763 3.91016 14.3591 3.89062 14.2498 3.81641C13.9294 3.59375 13.5896 3.39844 13.2341 3.23047C13.113 3.17188 13.0427 3.08203 13.0154 2.99609L12.4763 1.13281C12.3552 0.710938 12.0662 0.371094 11.6951 0.175781C11.6326 0.144531 11.5701 0.121094 11.4998 0.113281C11.0115 0.0390625 10.5076 0 9.99975 0ZM7.81225 10C7.81225 9.41984 8.04272 8.86344 8.45296 8.4532C8.86319 8.04297 9.41959 7.8125 9.99975 7.8125C10.5799 7.8125 11.1363 8.04297 11.5465 8.4532C11.9568 8.86344 12.1873 9.41984 12.1873 10C12.1873 10.5802 11.9568 11.1366 11.5465 11.5468C11.1363 11.957 10.5799 12.1875 9.99975 12.1875C9.41959 12.1875 8.86319 11.957 8.45296 11.5468C8.04272 11.1366 7.81225 10.5802 7.81225 10ZM13.4373 10C13.4373 9.08832 13.0751 8.21398 12.4304 7.56932C11.7858 6.92466 10.9114 6.5625 9.99975 6.5625C9.08807 6.5625 8.21373 6.92466 7.56907 7.56932C6.92442 8.21398 6.56225 9.08832 6.56225 10C6.56225 10.9117 6.92442 11.786 7.56907 12.4307C8.21373 13.0753 9.08807 13.4375 9.99975 13.4375C10.9114 13.4375 11.7858 13.0753 12.4304 12.4307C13.0751 11.786 13.4373 10.9117 13.4373 10Z"
          fill={fill}
        />
      </Svg>
    );
  }
};

export default GearSvg;
