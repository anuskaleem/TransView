import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const guidelineBaseHeight = 812;

const scaleVertical = (size) => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize, androidSize, doScale = false) =>
  Platform.select({
    ios: doScale ? scaleVertical(iosSize) : iosSize, // iosSize,
    android: doScale
      ? scaleVertical(androidSize || iosSize)
      : androidSize || iosSize, // androidSize || iosSize,
  });
const generatedFontSize = (iosFontSize, androidFontSize) =>
  Platform.select({
    ios: iosFontSize,
    android: androidFontSize || iosFontSize,
  });

export default {
  generatedFontSize,
  ratio
};
