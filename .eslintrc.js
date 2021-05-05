module.exports = {
  extends: "@react-native-community",
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
