import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";
import Image from "next/image";

const Wrapper = styled(SectionWrapper)({
  textAlign: "center",
  paddingTop: "100px",
  paddingBottom: "100px",
  backgroundColor: "#fafafa",

  "@media(max-width: 768px)": {
    minHeight: "540px",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
});

const MetaSection = styled.section({
  marginBottom: "72px",

  "@media(max-width: 768px)": {
    marginBottom: "32px",
  },
});

const MetaSectionTitle = styled.h2({
  fontSize: "1.75rem",
  marginBottom: "8px",

  "@media(max-width: 768px)": {
    fontSize: "1rem",
    marginBottom: "16px",
  },
});

const MetaSectionCaption = styled.p({
  margin: "auto",
  marginBottom: "0",
  fontWeight: "200",
  fontSize: "1.125rem",
  maxWidth: "750px",
  color: "var(--secondary)",

  "@media(max-width: 768px)": {
    fontSize: "0.875rem",
  },
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
  padding: "56px",
  flexBasis: "50%",
  maxWidth: "528px",
  background: "#fff",
  textAlign: "right",
  borderRadius: "1em",
  boxShadow: "var(--shadow)",

  "@media(max-width: 768px)": {
    display: "block",
    maxWidth: "312px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginBottom: "1.25rem",
    padding: "26px",
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

const ClientBoxComment = styled.div({
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

const ClientBoxUserInfo = styled.figcaption({});

const ClientBoxUserName = styled.h3({
  fontSize: "1em",
  marginBottom: "0.5rem",
});

const ClientBoxUserJob = styled.span({
  fontWeight: "200",

  "@media(max-width: 768px)": {
    display: "block",
    marginBottom: "1rem",
  },
});

const ClientLogoWrapper = styled.div({
  gap: "3.75em",
  display: "flex",
  marginTop: "8px",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width: 768px)": {
    gap: "1.25em",
  },
});

const ClientLogo = styled(Image)({
  objectFit: "contain",

  "@media(max-width: 768px)": {
    width: "30px",
    height: "30px",
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
  ClientBoxUserInfo,
  MetaSectionCaption,
  ClientBoxCommentMessage,
};
