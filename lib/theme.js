/* eslint-disable import/prefer-default-export */
const breakpoints = ["0", "600px", "1024px", "1280px", "1440px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const theme = {
  breakpoints,
  fonts: {
    body: "Public Sans",
    heading: "Poppins",
  },
  fontSizes: {
    tiny: ".5rem",
    small: ".625rem",
    body: ".75rem",
    smbody: ".78rem",
    smtitle: "0.8625rem",
    subtitle: ".875rem",
    smsubtitle: ".95rem",
    title: "1rem",
    big: "1.25rem",
    large: "2rem",
    larger: "2.5rem",
  },
  space: [
    "0",
    "0.5rem",
    "1rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "7rem",
    "8rem",
    "9rem",
  ],
  colors: {
    primary: "#06bf59",
    primaryDark: "#03a87c",
    primaryLight: "#03A87C",
    primaryLightBackground: "#e5f6f1",
    primaryBg: "#e6f3f0",
    secondary: "#48a97c",
    background: "#F7F8FA",
    light: "#aaa",
    grayBackground: "#e0e0e0",
    grayer: "#142F47",
    darkGray: "#636363",
    gray: "#dddddd",
    grayTwo: "#bdbdbd",
    white: "#ffffff",
    black: "#000000",
    danger: "#E17055",
    mute: "#8FA2AA",
    blueBg: "#E6F3F0",
    error: "#FC805E",
    negative: "#DE425B",
    inactiveGray: "#A0A0A0",
    placeholder: "#c5c5c5",
    warning: "#fff9c4",
    inputBg: "#FAFAFA",
    inputGray: "#D8D8D8",
    inputGrayer: "#9e9e9e",
    inputBorder: "#E1E1E1",
    checkBoxGreen: "#4caf50",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    disable: {
      color: "white",
      bg: "grayTwo",
    },
  },
};
