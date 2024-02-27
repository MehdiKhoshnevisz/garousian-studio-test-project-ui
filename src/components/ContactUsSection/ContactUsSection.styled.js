import styled from "styled-components";

import {
  LogoTitle,
  LogoWrapper,
  LogoCaption,
  MetaSection,
  MetaSectionTitle,
  MetaSectionCaption,
  CallToActionsWrapper,
} from "../TopSection/TopSection.styled";
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
