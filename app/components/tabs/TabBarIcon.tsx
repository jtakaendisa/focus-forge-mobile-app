import Svg, { Path } from 'react-native-svg';

import { TabRoute } from '@/app/entities';

interface Props {
  currentPath: TabRoute;
  color: string;
  isSelected?: boolean;
}

const TabBarIcon = ({ currentPath, color, isSelected }: Props) => {
  const SVG_SIZE = 22;

  switch (currentPath) {
    case '':
      if (isSelected) {
        return (
          <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
            <Path
              d="M0 2.85714C0 1.28125 1.28125 0 2.85714 0H17.1429C18.7188 0 20 1.28125 20 2.85714V12.8571H15C13.817 12.8571 12.8571 13.817 12.8571 15V20H2.85714C1.28125 20 0 18.7188 0 17.1429V2.85714ZM17.9777 14.2857H20L18.5714 15.7143L15.7143 18.5714L14.2857 20V17.9777V15C14.2857 14.6071 14.6071 14.2857 15 14.2857H17.9777ZM5 15.3571C5 15.2164 4.97229 15.0771 4.91844 14.9471C4.8646 14.8171 4.78568 14.699 4.68619 14.5995C4.58669 14.5 4.46858 14.4211 4.33859 14.3673C4.2086 14.3134 4.06927 14.2857 3.92857 14.2857C3.78787 14.2857 3.64855 14.3134 3.51855 14.3673C3.38856 14.4211 3.27045 14.5 3.17096 14.5995C3.07147 14.699 2.99254 14.8171 2.9387 14.9471C2.88486 15.0771 2.85714 15.2164 2.85714 15.3571C2.85714 15.4978 2.88486 15.6372 2.9387 15.7672C2.99254 15.8972 3.07147 16.0153 3.17096 16.1148C3.27045 16.2142 3.38856 16.2932 3.51855 16.347C3.64855 16.4009 3.78787 16.4286 3.92857 16.4286C4.06927 16.4286 4.2086 16.4009 4.33859 16.347C4.46858 16.2932 4.58669 16.2142 4.68619 16.1148C4.78568 16.0153 4.8646 15.8972 4.91844 15.7672C4.97229 15.6372 5 15.4978 5 15.3571ZM3.92857 3.57143C3.64441 3.57143 3.37189 3.68431 3.17096 3.88524C2.97003 4.08617 2.85714 4.3587 2.85714 4.64286C2.85714 4.92702 2.97003 5.19954 3.17096 5.40047C3.37189 5.6014 3.64441 5.71429 3.92857 5.71429C4.21273 5.71429 4.48525 5.6014 4.68619 5.40047C4.88712 5.19954 5 4.92702 5 4.64286C5 4.3587 4.88712 4.08617 4.68619 3.88524C4.48525 3.68431 4.21273 3.57143 3.92857 3.57143ZM5 10C5 9.8593 4.97229 9.71997 4.91844 9.58998C4.8646 9.45999 4.78568 9.34188 4.68619 9.24238C4.58669 9.14289 4.46858 9.06397 4.33859 9.01013C4.2086 8.95628 4.06927 8.92857 3.92857 8.92857C3.78787 8.92857 3.64855 8.95628 3.51855 9.01013C3.38856 9.06397 3.27045 9.14289 3.17096 9.24238C3.07147 9.34188 2.99254 9.45999 2.9387 9.58998C2.88486 9.71997 2.85714 9.8593 2.85714 10C2.85714 10.1407 2.88486 10.28 2.9387 10.41C2.99254 10.54 3.07147 10.6581 3.17096 10.7576C3.27045 10.8571 3.38856 10.936 3.51855 10.9899C3.64855 11.0437 3.78787 11.0714 3.92857 11.0714C4.06927 11.0714 4.2086 11.0437 4.33859 10.9899C4.46858 10.936 4.58669 10.8571 4.68619 10.7576C4.78568 10.6581 4.8646 10.54 4.91844 10.41C4.97229 10.28 5 10.1407 5 10Z"
              fill={color}
            />
          </Svg>
        );
      }
      return (
        <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
          <Path
            d="M17.1429 1.42857C17.933 1.42857 18.5714 2.06696 18.5714 2.85714V12.1429H14.2857C13.1027 12.1429 12.1429 13.1027 12.1429 14.2857V18.5714H2.85714C2.06696 18.5714 1.42857 17.933 1.42857 17.1429V2.85714C1.42857 2.06696 2.06696 1.42857 2.85714 1.42857H17.1429ZM17.9777 13.5714L13.5714 17.9777V14.2857C13.5714 13.8929 13.8929 13.5714 14.2857 13.5714H17.9777ZM2.85714 0C1.28125 0 0 1.28125 0 2.85714V17.1429C0 18.7188 1.28125 20 2.85714 20H12.3884C13.1473 20 13.875 19.7009 14.4107 19.1652L19.1652 14.4063C19.7009 13.8705 20 13.1429 20 12.3839V2.85714C20 1.28125 18.7188 0 17.1429 0H2.85714ZM5.71429 15.3571C5.71429 15.073 5.6014 14.8005 5.40047 14.5995C5.19954 14.3986 4.92702 14.2857 4.64286 14.2857C4.3587 14.2857 4.08617 14.3986 3.88524 14.5995C3.68431 14.8005 3.57143 15.073 3.57143 15.3571C3.57143 15.6413 3.68431 15.9138 3.88524 16.1148C4.08617 16.3157 4.3587 16.4286 4.64286 16.4286C4.92702 16.4286 5.19954 16.3157 5.40047 16.1148C5.6014 15.9138 5.71429 15.6413 5.71429 15.3571ZM4.64286 3.57143C4.3587 3.57143 4.08617 3.68431 3.88524 3.88524C3.68431 4.08617 3.57143 4.3587 3.57143 4.64286C3.57143 4.92702 3.68431 5.19954 3.88524 5.40047C4.08617 5.6014 4.3587 5.71429 4.64286 5.71429C4.92702 5.71429 5.19954 5.6014 5.40047 5.40047C5.6014 5.19954 5.71429 4.92702 5.71429 4.64286C5.71429 4.3587 5.6014 4.08617 5.40047 3.88524C5.19954 3.68431 4.92702 3.57143 4.64286 3.57143ZM5.71429 10C5.71429 9.71584 5.6014 9.44332 5.40047 9.24239C5.19954 9.04145 4.92702 8.92857 4.64286 8.92857C4.3587 8.92857 4.08617 9.04145 3.88524 9.24239C3.68431 9.44332 3.57143 9.71584 3.57143 10C3.57143 10.2842 3.68431 10.5567 3.88524 10.7576C4.08617 10.9585 4.3587 11.0714 4.64286 11.0714C4.92702 11.0714 5.19954 10.9585 5.40047 10.7576C5.6014 10.5567 5.71429 10.2842 5.71429 10Z"
            fill={color}
          />
        </Svg>
      );
    case 'habits':
      if (isSelected) {
        return (
          <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
            <Path
              d="M0.160156 1.49219C0.0546875 1.33594 0 1.14844 0 0.960938C0 0.429688 0.429688 0 0.960938 0H5.23047C5.66797 0 6.07813 0.230469 6.30078 0.605469L8.97656 5.0625C7.09375 5.30078 5.41016 6.17969 4.15625 7.48047L0.160156 1.49219ZM19.8359 1.49219L15.8438 7.48047C14.5898 6.17969 12.9063 5.30078 11.0234 5.0625L13.6992 0.605469C13.9258 0.230469 14.332 0 14.7695 0H19.0391C19.5703 0 20 0.429688 20 0.960938C20 1.14844 19.9453 1.33594 19.8398 1.49219H19.8359ZM3.125 13.125C3.125 11.3016 3.84933 9.55295 5.13864 8.26364C6.42795 6.97433 8.17664 6.25 10 6.25C11.8234 6.25 13.572 6.97433 14.8614 8.26364C16.1507 9.55295 16.875 11.3016 16.875 13.125C16.875 14.9484 16.1507 16.697 14.8614 17.9864C13.572 19.2757 11.8234 20 10 20C8.17664 20 6.42795 19.2757 5.13864 17.9864C3.84933 16.697 3.125 14.9484 3.125 13.125ZM10.3281 9.41797C10.1953 9.14453 9.80859 9.14453 9.67188 9.41797L8.79687 11.1914C8.74219 11.3008 8.64062 11.375 8.52344 11.3906L6.5625 11.6758C6.26172 11.7187 6.14453 12.0859 6.35938 12.3008L7.77734 13.6836C7.86328 13.7695 7.90234 13.8867 7.88281 14.0078L7.54687 15.957C7.49609 16.2539 7.80859 16.4844 8.07813 16.3437L9.82813 15.4219C9.93359 15.3672 10.0625 15.3672 10.168 15.4219L11.918 16.3437C12.1875 16.4844 12.5 16.2578 12.4492 15.957L12.1133 14.0078C12.0938 13.8906 12.1328 13.7695 12.2187 13.6836L13.6367 12.3008C13.8555 12.0898 13.7344 11.7227 13.4336 11.6758L11.4766 11.3906C11.3594 11.375 11.2539 11.2969 11.2031 11.1914L10.3281 9.41797Z"
              fill={color}
            />
          </Svg>
        );
      }
      return (
        <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
          <Path
            d="M4.15625 7.48047C4.44922 7.17578 4.76562 6.89844 5.10156 6.64453L1.50391 1.25H5.54297L7.94922 5.26172C8.375 5.15234 8.81641 5.07422 9.26953 5.03125L6.61328 0.605469C6.38672 0.230469 5.98047 0 5.54297 0H0.960938C0.429688 0 0 0.429688 0 0.960938C0 1.14844 0.0546875 1.33594 0.160156 1.49219L4.15625 7.48047ZM10.7305 5.03125C11.1836 5.07031 11.625 5.14844 12.0508 5.26172L14.457 1.25H18.4961L14.9023 6.64453C15.2383 6.89844 15.5547 7.17969 15.8477 7.48047L19.8398 1.49219C19.9453 1.33594 20 1.14844 20 0.960938C20 0.429688 19.5703 0 19.0391 0H14.457C14.0195 0 13.6094 0.230469 13.3867 0.605469L10.7305 5.03125ZM10 7.5C10.7387 7.5 11.4701 7.64549 12.1526 7.92818C12.8351 8.21086 13.4551 8.62519 13.9775 9.14752C14.4998 9.66985 14.9141 10.2899 15.1968 10.9724C15.4795 11.6549 15.625 12.3863 15.625 13.125C15.625 13.8637 15.4795 14.5951 15.1968 15.2776C14.9141 15.9601 14.4998 16.5801 13.9775 17.1025C13.4551 17.6248 12.8351 18.0391 12.1526 18.3218C11.4701 18.6045 10.7387 18.75 10 18.75C9.26131 18.75 8.52986 18.6045 7.84741 18.3218C7.16495 18.0391 6.54485 17.6248 6.02252 17.1025C5.50019 16.5801 5.08586 15.9601 4.80318 15.2776C4.52049 14.5951 4.375 13.8637 4.375 13.125C4.375 12.3863 4.52049 11.6549 4.80318 10.9724C5.08586 10.2899 5.50019 9.66985 6.02252 9.14752C6.54485 8.62519 7.16495 8.21086 7.84741 7.92818C8.52986 7.64549 9.26131 7.5 10 7.5ZM10 20C11.8234 20 13.572 19.2757 14.8614 17.9864C16.1507 16.697 16.875 14.9484 16.875 13.125C16.875 11.3016 16.1507 9.55295 14.8614 8.26364C13.572 6.97433 11.8234 6.25 10 6.25C8.17664 6.25 6.42795 6.97433 5.13864 8.26364C3.84933 9.55295 3.125 11.3016 3.125 13.125C3.125 14.9484 3.84933 16.697 5.13864 17.9864C6.42795 19.2757 8.17664 20 10 20ZM11.5156 11.0352L10.8398 9.66406C10.4961 8.96875 9.50391 8.96875 9.16016 9.66406L8.48438 11.0352L6.97266 11.2539C6.20312 11.3672 5.89844 12.3125 6.45312 12.8516L7.54688 13.918L7.28516 15.4297C7.15234 16.1953 7.95703 16.7812 8.64453 16.418L10 15.707L11.3516 16.418C12.0391 16.7812 12.8438 16.1953 12.7109 15.4297L12.4531 13.9219L13.5469 12.8555C14.1016 12.3125 13.7969 11.3672 13.0273 11.2578L11.5156 11.0391V11.0352ZM9.53125 11.7383L10 10.7891L10.4688 11.7383C10.6055 12.0156 10.8711 12.207 11.1758 12.25L12.2227 12.4023L11.4648 13.1406C11.2422 13.3555 11.1445 13.668 11.1953 13.9688L11.375 15.0117L10.4375 14.5195C10.1641 14.375 9.83984 14.375 9.56641 14.5195L8.62891 15.0117L8.80859 13.9688C8.85938 13.6641 8.76172 13.3555 8.53906 13.1406L7.78125 12.4023L8.82812 12.25C9.13281 12.207 9.39844 12.0156 9.53516 11.7383H9.53125Z"
            fill={color}
          />
        </Svg>
      );
    case 'tasks':
      if (isSelected) {
        return (
          <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
            <Path
              d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45313 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70313 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z"
              fill={color}
            />
          </Svg>
        );
      }
      return (
        <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
          <Path
            d="M10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.1914 7.94141C14.4336 7.69922 14.4336 7.30078 14.1914 7.05859C13.9492 6.81641 13.5508 6.81641 13.3086 7.05859L8.75 11.6172L6.69141 9.55859C6.44922 9.31641 6.05078 9.31641 5.80859 9.55859C5.56641 9.80078 5.56641 10.1992 5.80859 10.4414L8.30859 12.9414C8.55078 13.1836 8.94922 13.1836 9.19141 12.9414L14.1914 7.94141Z"
            fill={color}
          />
        </Svg>
      );
    case 'timer':
      if (isSelected) {
        return (
          <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 17 20" fill="none">
            <Path
              d="M6.25 0C5.55859 0 5 0.558594 5 1.25C5 1.94141 5.55859 2.5 6.25 2.5H6.875V3.84375C2.98047 4.44531 0 7.8125 0 11.875C0 16.3633 3.63672 20 8.125 20C12.6133 20 16.25 16.3633 16.25 11.875C16.25 10.2422 15.7695 8.72266 14.9414 7.45313L15.8828 6.51172C16.3711 6.02344 16.3711 5.23047 15.8828 4.74219C15.3945 4.25391 14.6016 4.25391 14.1133 4.74219L13.2695 5.58594C12.1719 4.6875 10.8398 4.07031 9.375 3.84375V2.5H10C10.6914 2.5 11.25 1.94141 11.25 1.25C11.25 0.558594 10.6914 0 10 0H8.125H6.25ZM9.0625 7.5V12.5C9.0625 13.0195 8.64453 13.4375 8.125 13.4375C7.60547 13.4375 7.1875 13.0195 7.1875 12.5V7.5C7.1875 6.98047 7.60547 6.5625 8.125 6.5625C8.64453 6.5625 9.0625 6.98047 9.0625 7.5Z"
              fill={color}
            />
          </Svg>
        );
      }
      return (
        <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 18 20" fill="none">
          <Path
            d="M5.25 0.625C5.25 0.28125 5.53125 0 5.875 0H12.125C12.4688 0 12.75 0.28125 12.75 0.625C12.75 0.96875 12.4688 1.25 12.125 1.25H9.625V3.77344C11.5547 3.92188 13.2969 4.74219 14.6133 6L16.0586 4.55469C16.3008 4.3125 16.6992 4.3125 16.9414 4.55469C17.1836 4.79688 17.1836 5.19531 16.9414 5.4375L15.4492 6.92969C16.5 8.30469 17.125 10.0156 17.125 11.875C17.125 16.3633 13.4883 20 9 20C4.51172 20 0.875 16.3633 0.875 11.875C0.875 7.59766 4.17969 4.09375 8.375 3.77344V1.25H5.875C5.53125 1.25 5.25 0.96875 5.25 0.625ZM2.125 11.875C2.125 13.6984 2.84933 15.447 4.13864 16.7364C5.42795 18.0257 7.17664 18.75 9 18.75C10.8234 18.75 12.572 18.0257 13.8614 16.7364C15.1507 15.447 15.875 13.6984 15.875 11.875C15.875 10.0516 15.1507 8.30295 13.8614 7.01364C12.572 5.72433 10.8234 5 9 5C7.17664 5 5.42795 5.72433 4.13864 7.01364C2.84933 8.30295 2.125 10.0516 2.125 11.875ZM9.625 8.125V12.5C9.625 12.8438 9.34375 13.125 9 13.125C8.65625 13.125 8.375 12.8438 8.375 12.5V8.125C8.375 7.78125 8.65625 7.5 9 7.5C9.34375 7.5 9.625 7.78125 9.625 8.125Z"
            fill={color}
          />
        </Svg>
      );
    case 'settings':
      if (isSelected) {
        return (
          <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 19 20" fill="none">
            <Path
              d="M18.802 6.50908C18.927 6.84899 18.8216 7.22797 18.552 7.47021L16.8602 9.00957C16.9032 9.33386 16.9267 9.66595 16.9267 10.002C16.9267 10.338 16.9032 10.6701 16.8602 10.9943L18.552 12.5337C18.8216 12.7759 18.927 13.1549 18.802 13.4948C18.6301 13.9598 18.423 14.4052 18.1847 14.8349L18.0011 15.1514C17.7432 15.5812 17.4541 15.9875 17.1376 16.3704C16.9071 16.6517 16.5242 16.7455 16.1804 16.6361L14.0042 15.9445C13.4807 16.3469 12.9024 16.6829 12.2851 16.9369L11.7967 19.1678C11.7186 19.5233 11.4451 19.8047 11.0857 19.8633C10.5465 19.9531 9.99171 20 9.42519 20C8.85867 20 8.30388 19.9531 7.76471 19.8633C7.40526 19.8047 7.13177 19.5233 7.05363 19.1678L6.56526 16.9369C5.94795 16.6829 5.36971 16.3469 4.84617 15.9445L2.67387 16.64C2.33005 16.7494 1.94717 16.6517 1.71665 16.3743C1.40019 15.9914 1.11107 15.5851 0.853204 15.1553L0.669574 14.8388C0.431247 14.4091 0.224175 13.9637 0.0522663 13.4987C-0.0727581 13.1588 0.0327313 12.7798 0.302315 12.5376L1.99405 10.9982C1.95107 10.6701 1.92763 10.338 1.92763 10.002C1.92763 9.66595 1.95107 9.33386 1.99405 9.00957L0.302315 7.47021C0.0327313 7.22797 -0.0727581 6.84899 0.0522663 6.50908C0.224175 6.04415 0.431247 5.59875 0.669574 5.16898L0.853204 4.85251C1.11107 4.42274 1.40019 4.01641 1.71665 3.63352C1.94717 3.35222 2.33005 3.25845 2.67387 3.36785L4.85008 4.05939C5.37362 3.65696 5.95186 3.32096 6.56916 3.06701L7.05754 0.836101C7.13568 0.480563 7.40917 0.199258 7.76862 0.140652C8.30778 0.0468842 8.86258 0 9.4291 0C9.99561 0 10.5504 0.0468842 11.0896 0.136745C11.449 0.195351 11.7225 0.476656 11.8007 0.832194L12.289 3.0631C12.9063 3.31705 13.4846 3.65306 14.0081 4.05548L16.1843 3.36394C16.5281 3.25454 16.911 3.35222 17.1415 3.62962C17.458 4.0125 17.7471 4.41883 18.005 4.8486L18.1886 5.16507C18.4269 5.59484 18.634 6.04024 18.8059 6.50518L18.802 6.50908ZM9.4291 13.1276C10.2581 13.1276 11.0531 12.7983 11.6392 12.2121C12.2254 11.6259 12.5547 10.8309 12.5547 10.002C12.5547 9.17299 12.2254 8.37798 11.6392 7.79181C11.0531 7.20565 10.2581 6.87634 9.4291 6.87634C8.60013 6.87634 7.80512 7.20565 7.21896 7.79181C6.63279 8.37798 6.30349 9.17299 6.30349 10.002C6.30349 10.8309 6.63279 11.6259 7.21896 12.2121C7.80512 12.7983 8.60013 13.1276 9.4291 13.1276Z"
              fill={color}
            />
          </Svg>
        );
      }
      return (
        <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 20 20" fill="none">
          <Path
            d="M8.72241 1.47656C8.73803 1.41797 8.77319 1.36719 8.81616 1.32812C9.20288 1.27734 9.59741 1.25 9.99975 1.25C10.4021 1.25 10.7966 1.27734 11.1833 1.32812C11.2263 1.36719 11.2576 1.41797 11.2771 1.47656L11.8123 3.33984C11.949 3.8125 12.2888 4.16406 12.6912 4.35938C12.988 4.5 13.2693 4.66406 13.5388 4.84766C13.906 5.10156 14.3865 5.21875 14.863 5.10156L16.7458 4.63281C16.8044 4.61719 16.863 4.62109 16.9177 4.64062C17.1287 4.91016 17.324 5.19531 17.4998 5.49219L17.6677 5.78125C17.8318 6.07422 17.9763 6.37891 18.1052 6.69141C18.0935 6.75 18.0662 6.80469 18.0232 6.84766L16.6716 8.24219C16.3318 8.59375 16.1951 9.06641 16.2302 9.51172C16.2419 9.67188 16.2498 9.83594 16.2498 10C16.2498 10.1641 16.2419 10.3281 16.2302 10.4883C16.1951 10.9336 16.3318 11.4062 16.6716 11.7578L18.0193 13.1523C18.0623 13.1953 18.0896 13.25 18.1013 13.3086C17.9724 13.6211 17.8279 13.9258 17.6638 14.2227L17.4998 14.5078C17.3201 14.8047 17.1248 15.0859 16.9177 15.3594C16.863 15.3789 16.8044 15.3789 16.7458 15.3672L14.863 14.8984C14.3865 14.7812 13.9099 14.8984 13.5388 15.1523C13.2693 15.3359 12.988 15.5 12.6912 15.6406C12.2888 15.832 11.9451 16.1875 11.8123 16.6602L11.2771 18.5234C11.2615 18.582 11.2263 18.6328 11.1833 18.6719C10.7966 18.7227 10.4021 18.75 9.99975 18.75C9.59741 18.75 9.20288 18.7227 8.81616 18.6719C8.77319 18.6328 8.74194 18.582 8.72241 18.5234L8.18725 16.6602C8.05053 16.1875 7.71069 15.8359 7.30835 15.6406C7.01147 15.5 6.73022 15.3359 6.46069 15.1523C6.0935 14.8984 5.61303 14.7812 5.13647 14.8984L3.25366 15.3672C3.19506 15.3828 3.13647 15.3789 3.08178 15.3594C2.87085 15.0859 2.67553 14.8047 2.49585 14.5078L2.33178 14.2227C2.16772 13.9297 2.02319 13.625 1.89428 13.3086C1.906 13.25 1.93335 13.1953 1.97631 13.1523L3.32788 11.7578C3.66772 11.4062 3.80444 10.9336 3.76928 10.4883C3.75756 10.3281 3.74975 10.1641 3.74975 10C3.74975 9.83594 3.75756 9.67188 3.76928 9.51172C3.80444 9.06641 3.66772 8.59375 3.32788 8.24219L1.98022 6.84375C1.93725 6.80078 1.90991 6.74609 1.89819 6.6875C2.0271 6.375 2.17163 6.07031 2.33569 5.77344L2.49975 5.48828C2.67944 5.19141 2.87475 4.91016 3.08569 4.63672C3.14038 4.61719 3.19897 4.61719 3.25756 4.62891L5.14038 5.09766C5.61694 5.21484 6.0935 5.09766 6.4646 4.84375C6.73413 4.66016 7.01538 4.49609 7.31225 4.35547C7.71459 4.16406 8.05834 3.80859 8.19116 3.33594L8.72631 1.47266L8.72241 1.47656ZM9.99975 0C9.49194 0 8.98803 0.0390625 8.49975 0.113281C8.43335 0.125 8.36694 0.144531 8.30444 0.175781C7.93335 0.367188 7.64428 0.707031 7.52319 1.13281L6.98803 2.99609C6.96459 3.08203 6.89038 3.17188 6.76928 3.23047C6.41381 3.39844 6.07397 3.59766 5.75366 3.81641C5.64428 3.89062 5.5271 3.91016 5.44116 3.88672L3.55835 3.41797C3.13256 3.3125 2.69506 3.39453 2.3435 3.61719C2.28491 3.65234 2.23413 3.69922 2.19116 3.75391C1.91381 4.10156 1.656 4.46484 1.42553 4.84766L1.42163 4.85938L1.24975 5.15625L1.24585 5.16797C1.03491 5.55078 0.847408 5.94531 0.687252 6.35547C0.663814 6.41797 0.648189 6.48438 0.644283 6.55078C0.624752 6.97266 0.773189 7.39453 1.08178 7.71484L2.42944 9.10938C2.49194 9.17578 2.53491 9.28125 2.52319 9.41406C2.50756 9.60938 2.49975 9.80469 2.49975 10C2.49975 10.1953 2.50756 10.3945 2.52319 10.5859C2.53491 10.7188 2.49194 10.8281 2.42944 10.8906L1.08178 12.2891C0.773189 12.6094 0.624752 13.0312 0.644283 13.4531C0.648189 13.5195 0.663814 13.5859 0.687252 13.6484C0.847408 14.0586 1.03491 14.4531 1.24585 14.8359L1.24975 14.8477L1.42163 15.1445L1.42553 15.1562C1.656 15.5391 1.90991 15.9062 2.19116 16.2539C2.23413 16.3086 2.28491 16.3555 2.3435 16.3906C2.69506 16.6133 3.13256 16.6953 3.55835 16.5898L5.44116 16.1211C5.5271 16.0977 5.64428 16.1172 5.75366 16.1914C6.07397 16.4141 6.41381 16.6094 6.76928 16.7773C6.89038 16.8359 6.96069 16.9258 6.98803 17.0117L7.52319 18.8672C7.64428 19.2891 7.93335 19.6289 8.30444 19.8242C8.36694 19.8555 8.42944 19.8789 8.49975 19.8867C8.98803 19.9609 9.49194 20 9.99975 20C10.5076 20 11.0115 19.9609 11.4998 19.8867C11.5662 19.875 11.6326 19.8555 11.6951 19.8242C12.0662 19.6328 12.3552 19.293 12.4763 18.8672L13.0115 17.0039C13.0349 16.918 13.1091 16.8281 13.2302 16.7695C13.5857 16.6016 13.9255 16.4023 14.2458 16.1836C14.3552 16.1094 14.4724 16.0898 14.5583 16.1133L16.4412 16.582C16.8669 16.6875 17.3044 16.6094 17.656 16.3828C17.7146 16.3477 17.7654 16.3008 17.8083 16.2461C18.0857 15.8984 18.3396 15.5352 18.5701 15.1523L18.574 15.1406L18.7498 14.8438L18.7537 14.832C18.9646 14.4531 19.1521 14.0547 19.3123 13.6445C19.3357 13.582 19.3513 13.5156 19.3552 13.4492C19.3748 13.0273 19.2263 12.6055 18.9177 12.2852L17.5701 10.8906C17.5076 10.8242 17.4646 10.7188 17.4763 10.5859C17.4919 10.3906 17.4998 10.1953 17.4998 10C17.4998 9.80469 17.4919 9.60547 17.4763 9.41406C17.4646 9.28125 17.5076 9.17188 17.5701 9.10938L18.9177 7.71484C19.2263 7.39453 19.3748 6.97266 19.3552 6.55078C19.3513 6.48438 19.3357 6.41797 19.3123 6.35547C19.1521 5.94531 18.9646 5.55078 18.7537 5.16797L18.7498 5.15625L18.5779 4.85938L18.574 4.84766C18.3435 4.46484 18.0896 4.09766 17.8123 3.75391C17.7693 3.69922 17.7185 3.65234 17.6599 3.61719C17.3083 3.39453 16.8708 3.3125 16.4451 3.41797L14.5623 3.88672C14.4763 3.91016 14.3591 3.89062 14.2498 3.81641C13.9294 3.59375 13.5896 3.39844 13.2341 3.23047C13.113 3.17188 13.0427 3.08203 13.0154 2.99609L12.4763 1.13281C12.3552 0.710938 12.0662 0.371094 11.6951 0.175781C11.6326 0.144531 11.5701 0.121094 11.4998 0.113281C11.0115 0.0390625 10.5076 0 9.99975 0ZM7.81225 10C7.81225 9.41984 8.04272 8.86344 8.45296 8.4532C8.86319 8.04297 9.41959 7.8125 9.99975 7.8125C10.5799 7.8125 11.1363 8.04297 11.5465 8.4532C11.9568 8.86344 12.1873 9.41984 12.1873 10C12.1873 10.5802 11.9568 11.1366 11.5465 11.5468C11.1363 11.957 10.5799 12.1875 9.99975 12.1875C9.41959 12.1875 8.86319 11.957 8.45296 11.5468C8.04272 11.1366 7.81225 10.5802 7.81225 10ZM13.4373 10C13.4373 9.08832 13.0751 8.21398 12.4304 7.56932C11.7858 6.92466 10.9114 6.5625 9.99975 6.5625C9.08807 6.5625 8.21373 6.92466 7.56907 7.56932C6.92442 8.21398 6.56225 9.08832 6.56225 10C6.56225 10.9117 6.92442 11.786 7.56907 12.4307C8.21373 13.0753 9.08807 13.4375 9.99975 13.4375C10.9114 13.4375 11.7858 13.0753 12.4304 12.4307C13.0751 11.786 13.4373 10.9117 13.4373 10Z"
            fill={color}
          />
        </Svg>
      );
  }
};

export default TabBarIcon;
