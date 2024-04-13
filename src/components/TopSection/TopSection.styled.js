import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";

import BackgroundImage from "/public/images/bg-image.png";

const Wrapper = styled(SectionWrapper)({
  textAlign: "center",
  position: "relative",
  backgroundSize: "cover",
  paddingTop: "7.60375em",
  paddingBottom: "7.60375em",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${BackgroundImage.src})`,

  "&:before": {
    opacity: 0.8,
    content: '""',
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#203789",
  },

  "@media(max-width: 768px)": {
    minHeight: "540px",
    paddingTop: "3.29125em",
    paddingBottom: "3.29125em",
  },
});

const LogoWrapper = styled.div({
  color: "#ffffff",
  textAlign: "center",
  marginBottom: "4.5em",
});

const LogoTitle = styled.span({
  display: "block",
  fontSize: "1.5em",
  fontWeight: "bold",
});

const LogoCaption = styled.span({
  display: "block",
  fontSize: "1.25em",
});

const MetaSection = styled.section({
  margin: "auto",
  color: "#ffffff",
  maxWidth: "700px",
  marginBottom: "4.5em",

  "@media(max-width: 768px)": {
    maxWidth: "280px",
  },
});

const MetaSectionTitle = styled.h1({
  fontSize: "2rem",
  marginBottom: "0.25em",

  "@media(max-width: 768px)": {
    fontSize: "1.375rem",
  },
});

const MetaSectionCaption = styled.p({
  marginBottom: "0",
  fontWeight: "200",
  fontSize: "1.25rem",

  "@media(max-width: 768px)": {
    fontSize: "1rem",
  },
});

const CallToActionsWrapper = styled.div({
  gap: "1em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width: 319px)": {
    flexWrap: "wrap",
  },
});

export {
  Wrapper,
  LogoTitle,
  LogoCaption,
  LogoWrapper,
  MetaSection,
  MetaSectionTitle,
  MetaSectionCaption,
  CallToActionsWrapper,
};
