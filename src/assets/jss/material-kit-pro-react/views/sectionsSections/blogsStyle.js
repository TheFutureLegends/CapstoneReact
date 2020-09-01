import {
  container,
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto,
  grayColor,
  whiteColor,
  sectionDark,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const blogsSection = {
  container,
  title,
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description: {
    padding: "50px 0",
  },
  blog: {
    padding: "0px",
  },
  sectionDark: {
    ...sectionDark,
    backgroundSize: "550% 450%",
    "& $title, & $cardTitle": {
      color: whiteColor,
    },
    "& $cardCategory": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.5) !important",
    },
    "& $cardDescription": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76) !important",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0",
    },
  },
  description1: {
    ...description,
    lineHeight: "1.313rem",
  },
  author: {
    "& a": {
      color: grayColor[1],
      textDecoration: "none",
    },
  },
  card: {
    marginBottom: "80px",
  },
  card4: {
    marginBottom: "60px",
    textAlign: "center",
  },
};

export default blogsSection;
