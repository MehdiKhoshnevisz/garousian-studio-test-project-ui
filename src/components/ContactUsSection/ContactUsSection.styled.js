import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";

import ContactUsBackgroundImage from "/public/images/contact-us-bg.png";

const Wrapper = styled(SectionWrapper)({
  minHeight: "520px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "multiply",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundImage: `url(${ContactUsBackgroundImage.src})`,

  "@media(max-width: 768px)": {
    minHeight: "360px",
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
  color: "#ffffff",
  marginBottom: "4.5em",
});

const MetaSectionTitle = styled.h1({
  fontSize: "1.875em",
  marginBottom: "0.5em",
});

const MetaSectionCaption = styled.p({
  marginBottom: "0",
  fontWeight: "200",
  fontSize: "1.25em",
});

const CallToActionsWrapper = styled.div({
  gap: "1em",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
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
