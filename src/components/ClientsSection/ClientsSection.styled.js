import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";
import Image from "next/image";

const Wrapper = styled(SectionWrapper)({
  textAlign: "center",
  paddingTop: "6.875em",
  paddingBottom: "6.875em",
  backgroundColor: "#fafafa",

  "@media(max-width: 768px)": {
    minHeight: "540px",
    paddingTop: "3.75em",
    paddingBottom: "3.75em",
  },
});

const MetaSection = styled.section({
  marginBottom: "3.75em",
});

const MetaSectionTitle = styled.h2({
  fontSize: "1.75em",
  marginBottom: "0.5em",
});

const MetaSectionCaption = styled.p({
  margin: "auto",
  marginBottom: "0",
  fontWeight: "200",
  fontSize: "1.2em",
  maxWidth: "750px",
  color: "var(--secondary)",
});

const ClientsWrapper = styled.div({
  gap: "2.5em",
  display: "flex",
  marginBottom: "5em",

  "@media(max-width: 768px)": {
    display: "block",
    marginBottom: "2em",
  },
});

const ClientBox = styled.figure({
  gap: "2.5em",
  display: "flex",
  padding: "3.5em",
  background: "#fff",
  flexBasis: "50%",
  borderRadius: "1em",
  textAlign: "right",
  boxShadow: "var(--shadow)",

  "@media(max-width: 768px)": {
    display: "block",
    textAlign: "center",
    marginBottom: "1.25em",
    padding: "1.625em 1.125em",
  },
});

const ClientBoxAvatar = styled(Image)({
  background: "#fff",
  objectFit: "cover",
  borderRadius: "100%",

  "@media(max-width: 768px)": {
    width: "64px",
    height: "64px",
    marginBottom: "1em",
  },
});

const ClientBoxComment = styled.figcaption({
  flex: "1",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

const ClientBoxCommentMessage = styled.p({
  fontWeight: "300",
  marginBottom: "2em",
  lineHeight: "1.75",

  "@media(max-width: 768px)": {
    marginBottom: "0",
  },
});

const ClientBoxUserName = styled.h3({
  fontSize: "1em",
  marginBottom: "0.25rem",
});

const ClientBoxUserJob = styled.span({
  fontWeight: "200",

  "@media(max-width: 768px)": {
    display: "block",
    marginBottom: "1em",
  },
});

const ClientLogoWrapper = styled.div({
  gap: "3.75em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width: 768px)": {
    gap: "1.25em",
  },
});

const ClientLogo = styled(Image)({
  "@media(max-width: 768px)": {
    width: "1.875em",
    height: "1.875em",
  },
});

export {
  Wrapper,
  ClientBox,
  ClientLogo,
  MetaSection,
  ClientsWrapper,
  ClientBoxAvatar,
  ClientBoxComment,
  ClientBoxUserJob,
  MetaSectionTitle,
  ClientLogoWrapper,
  ClientBoxUserName,
  MetaSectionCaption,
  ClientBoxCommentMessage,
};
