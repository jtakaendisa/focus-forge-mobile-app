import Svg, { Path } from 'react-native-svg';
import { styled, View, Text } from 'tamagui';

interface Props {
  onCameraPress: () => void;
  onGalleryPress: () => void;
  onRemovePress: () => void;
}

const SVG_SIZE = 24;

const EditPhotoModalModule = ({
  onCameraPress,
  onGalleryPress,
  onRemovePress,
}: Props) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Edit Profile Photo</Heading>
      </HeadingContainer>
      <MainContent>
        <ButtonsContainer>
          <Button onPress={onCameraPress}>
            <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 28 24" fill="none">
              <Path
                d="M10.6661 0C9.375 0 8.22857 0.825 7.82143 2.05179L7.36071 3.42857H3.42857C1.5375 3.42857 0 4.96607 0 6.85714V20.5714C0 22.4625 1.5375 24 3.42857 24H24C25.8911 24 27.4286 22.4625 27.4286 20.5714V6.85714C27.4286 4.96607 25.8911 3.42857 24 3.42857H20.0679L19.6071 2.05179C19.2 0.825 18.0536 0 16.7625 0H10.6661ZM10.2589 2.86607C10.3179 2.68929 10.4786 2.57143 10.6661 2.57143H16.7625C16.9446 2.57143 17.1107 2.68929 17.1696 2.86607L17.9196 5.12143C18.0964 5.64643 18.5839 6 19.1411 6H24C24.4714 6 24.8571 6.38571 24.8571 6.85714V20.5714C24.8571 21.0429 24.4714 21.4286 24 21.4286H3.42857C2.95714 21.4286 2.57143 21.0429 2.57143 20.5714V6.85714C2.57143 6.38571 2.95714 6 3.42857 6H8.2875C8.83929 6 9.33214 5.64643 9.50893 5.12143L10.2589 2.86607ZM13.7143 19.7143C14.5022 19.7143 15.2824 19.5591 16.0104 19.2576C16.7383 18.956 17.3998 18.5141 17.9569 17.9569C18.5141 17.3998 18.956 16.7383 19.2576 16.0104C19.5591 15.2824 19.7143 14.5022 19.7143 13.7143C19.7143 12.9264 19.5591 12.1461 19.2576 11.4182C18.956 10.6902 18.5141 10.0288 17.9569 9.47165C17.3998 8.91449 16.7383 8.47254 16.0104 8.17101C15.2824 7.86948 14.5022 7.71429 13.7143 7.71429C12.9264 7.71429 12.1461 7.86948 11.4182 8.17101C10.6902 8.47254 10.0288 8.91449 9.47165 9.47165C8.91449 10.0288 8.47254 10.6902 8.17101 11.4182C7.86948 12.1461 7.71429 12.9264 7.71429 13.7143C7.71429 14.5022 7.86948 15.2824 8.17101 16.0104C8.47254 16.7383 8.91449 17.3998 9.47165 17.9569C10.0288 18.5141 10.6902 18.956 11.4182 19.2576C12.1461 19.5591 12.9264 19.7143 13.7143 19.7143ZM10.2857 13.7143C10.2857 12.805 10.6469 11.9329 11.2899 11.2899C11.9329 10.6469 12.805 10.2857 13.7143 10.2857C14.6236 10.2857 15.4957 10.6469 16.1387 11.2899C16.7816 11.9329 17.1429 12.805 17.1429 13.7143C17.1429 14.6236 16.7816 15.4957 16.1387 16.1387C15.4957 16.7816 14.6236 17.1429 13.7143 17.1429C12.805 17.1429 11.9329 16.7816 11.2899 16.1387C10.6469 15.4957 10.2857 14.6236 10.2857 13.7143Z"
                fill="#8C8C8C"
              />
            </Svg>
            <ButtonText>Camera</ButtonText>
          </Button>
          <Button onPress={onGalleryPress}>
            <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 28 24" fill="none">
              <Path
                d="M24 2.57143C24.4714 2.57143 24.8571 2.95714 24.8571 3.42857V20.5607L24.5893 20.2125L17.3036 10.7839C17.0625 10.4679 16.6821 10.2857 16.2857 10.2857C15.8893 10.2857 15.5143 10.4679 15.2679 10.7839L10.8214 16.5375L9.1875 14.25C8.94643 13.9125 8.56071 13.7143 8.14286 13.7143C7.725 13.7143 7.33929 13.9125 7.09821 14.2554L2.8125 20.2554L2.57143 20.5875V20.5714V3.42857C2.57143 2.95714 2.95714 2.57143 3.42857 2.57143H24ZM3.42857 0C1.5375 0 0 1.5375 0 3.42857V20.5714C0 22.4625 1.5375 24 3.42857 24H24C25.8911 24 27.4286 22.4625 27.4286 20.5714V3.42857C27.4286 1.5375 25.8911 0 24 0H3.42857ZM7.71429 10.2857C8.05197 10.2857 8.38635 10.2192 8.69833 10.09C9.01031 9.96075 9.29378 9.77134 9.53256 9.53256C9.77134 9.29378 9.96075 9.01031 10.09 8.69833C10.2192 8.38635 10.2857 8.05197 10.2857 7.71429C10.2857 7.3766 10.2192 7.04222 10.09 6.73024C9.96075 6.41826 9.77134 6.13479 9.53256 5.89601C9.29378 5.65723 9.01031 5.46782 8.69833 5.3386C8.38635 5.20937 8.05197 5.14286 7.71429 5.14286C7.3766 5.14286 7.04222 5.20937 6.73024 5.3386C6.41826 5.46782 6.13479 5.65723 5.89601 5.89601C5.65723 6.13479 5.46782 6.41826 5.3386 6.73024C5.20937 7.04222 5.14286 7.3766 5.14286 7.71429C5.14286 8.05197 5.20937 8.38635 5.3386 8.69833C5.46782 9.01031 5.65723 9.29378 5.89601 9.53256C6.13479 9.77134 6.41826 9.96075 6.73024 10.09C7.04222 10.2192 7.3766 10.2857 7.71429 10.2857Z"
                fill="#8C8C8C"
              />
            </Svg>
            <ButtonText>Gallery</ButtonText>
          </Button>
          <Button onPress={onRemovePress}>
            <Svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 21 24" fill="none">
              <Path
                d="M7.67813 0H13.3219C13.8891 0 14.4094 0.31875 14.6625 0.829688L15 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H1.5C0.670312 4.5 0 3.82969 0 3C0 2.17031 0.670312 1.5 1.5 1.5H6L6.3375 0.829688C6.59062 0.31875 7.11094 0 7.67813 0ZM1.5 6H19.5L18.5062 21.8906C18.4312 23.0766 17.4469 24 16.2609 24H4.73906C3.55312 24 2.56875 23.0766 2.49375 21.8906L1.5 6ZM6.70312 11.2031C6.2625 11.6437 6.2625 12.3562 6.70312 12.7922L8.90625 14.9953L6.70312 17.1984C6.2625 17.6391 6.2625 18.3516 6.70312 18.7875C7.14375 19.2234 7.85625 19.2281 8.29219 18.7875L10.4953 16.5844L12.6984 18.7875C13.1391 19.2281 13.8516 19.2281 14.2875 18.7875C14.7234 18.3469 14.7281 17.6344 14.2875 17.1984L12.0844 14.9953L14.2875 12.7922C14.7281 12.3516 14.7281 11.6391 14.2875 11.2031C13.8469 10.7672 13.1344 10.7625 12.6984 11.2031L10.4953 13.4062L8.29219 11.2031C7.85156 10.7625 7.13906 10.7625 6.70312 11.2031Z"
                fill="#C73A57"
              />
            </Svg>
            <ButtonText color="#C73A57">Remove</ButtonText>
          </Button>
        </ButtonsContainer>
      </MainContent>
    </Container>
  );
};

const Container = styled(View, {
  width: '80%',
  borderRadius: 16,
  backgroundColor: '#1C1C1C',
});

const HeadingContainer = styled(View, {
  alignItems: 'center',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderColor: '#262626',
});

const Heading = styled(Text, {
  fontSize: 16,
});

const MainContent = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 32,
  paddingVertical: 20,
});

const ButtonsContainer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const Button = styled(View, {
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 64,
  height: 64,
  paddingVertical: 8,
});

const ButtonText = styled(Text, {
  fontSize: 12,
  color: '#8C8C8C',
});

export default EditPhotoModalModule;
