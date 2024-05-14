import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const TODAYS_DATE = new Date();

const DATE_CARD_HEIGHT = 66;

export { SCREEN_WIDTH, SCREEN_HEIGHT, TODAYS_DATE, DATE_CARD_HEIGHT };
