import { LinearGradient } from 'expo-linear-gradient';
import { View, getTokenValue, styled } from 'tamagui';
import PlusSvg from '../icons/PlusSvg';

interface Props {
  onPress: () => void;
}

const CreateTaskButton = ({ onPress }: Props) => {
  const customRed2 = getTokenValue('$customRed2');
  const customRed3 = getTokenValue('$customRed3');

  return (
    <Container onPress={onPress}>
      <Gradient colors={[customRed2, customRed3]}>
        <PlusSvg size={16} />
      </Gradient>
    </Container>
  );
};

const Container = styled(View, {
  position: 'absolute',
  bottom: 18,
  right: 12,
  width: 56,
  height: 56,
  borderRadius: 16,
  overflow: 'hidden',
});

const Gradient = styled(LinearGradient, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export default CreateTaskButton;
