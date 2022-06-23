const { Dimensions } = require("react-native");

const deviceWidth = Dimensions.get("window").width;

const Colors = {
  light: "#fff",
  Gray800: "#222",
  Gray700: "#333",
  dark: "#000",
  Ripple300: "#eee",
};

const fonts = {
  mini: 12,
  small: 15,
  medium: 17,
  large: 20,
  xlarge: 24,
  smallScreen: 44,
  mediumScreen: 64,
  xxlarge: 70,
};

const fontWeights = {
  light: "400",
  medium: "500",
  semiBold: "700",
  bold: "800",
};

const margin = {
  xsmall: 2,
  small: 5,
  medium: 5,
  large: 10,
  xlarge: 20,
  xxlarge: 16,
  xxxlarge: 32,
};

const borderRadius = {
  xsmall: 3,
  small: 5,
  medium: 7,
  large: 10,
  xlarge: 15,
  xxlarge: 30,
};

const letterSpacing = {
  small: 0.5,
  medium: 1,
};

module.exports = {
  deviceWidth,
  Colors,
  fonts,
  fontWeights,
  margin,
  borderRadius,
  letterSpacing,
};
