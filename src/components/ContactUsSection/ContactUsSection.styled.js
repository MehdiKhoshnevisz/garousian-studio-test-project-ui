import styled from "styled-components";

import {
  LogoTitle,
  LogoWrapper,
  LogoCaption,
  MetaSection,
  CallToActionsWrapper,
  MetaSectionTitle as TopMetaSectionTitle,
  MetaSectionCaption as TopMetaSectionCaption,
} from "../TopSection/TopSection.styled";
import { SectionWrapper } from "@/components/Base/SectionWrapper";

import ContactUsBackgroundImage from "/public/images/contact-us-bg.png";

const Wrapper = styled(SectionWrapper)({
  textAlign: "center",
  position: "relative",
  paddingTop: "140.5px",
  backgroundSize: "cover",
  paddingBottom: "140.5px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${ContactUsBackgroundImage.src})`,

  "&:before": {
    opacity: 0.6,
    content: '""',
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000000",
  },

  "@media(max-width: 768px)": {
    paddingTop: "67px",
    paddingBottom: "67px",
  },
});

const MetaSectionTitle = styled(TopMetaSectionTitle)({
  fontSize: "1.75rem",

  "@media(max-width: 768px)": {
    fontSize: "1rem",
  },
});

const MetaSectionCaption = styled(TopMetaSectionCaption)({
  fontSize: "1.125rem",

  "@media(max-width: 768px)": {
    fontSize: "0.875rem",
  },
});

export {
  Wrapper,
  LogoTitle,
  LogoWrapper,
  LogoCaption,
  MetaSection,
  MetaSectionTitle,
  MetaSectionCaption,
  CallToActionsWrapper,
};
