import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";

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
  fontSize: "1.75rem",
  marginBottom: "0.5em",

  "@media(max-width: 768px)": {
    fontSize: "1rem",
  },
});

const MetaSectionCaption = styled.p({
  margin: "auto",
  marginBottom: "0",
  fontWeight: "200",
  maxWidth: "750px",
  fontSize: "1.125rem",
  color: "var(--secondary)",

  "@media(max-width: 768px)": {
    fontSize: "0.875rem",
  },
});

const ServicesWrapper = styled.div({
  gap: "1.25em",
  display: "flex",

  "@media(max-width: 768px)": {
    display: "block",
  },
});

const ServiceBox = styled.figure({
  flexBasis: "33.33%",

  "@media(max-width: 768px)": {
    margin: "auto",
    maxWidth: "400px",
  },

  "@media(max-width: 576px)": {
    margin: "auto",
    maxWidth: "310px",
  },
});

const ServiceBoxSection = styled.figcaption({
  width: "85%",
  zIndex: "10",
  margin: "auto",
  marginTop: "-3em",
  textAlign: "center",
  position: "relative",
  borderRadius: "16px",
  backgroundColor: "#fff",
  padding: "1.25em 1.875em",
  boxShadow: "var(--shadow)",

  "@media(max-width: 768px)": {
    marginTop: "-6em",
    marginBottom: "2em",
  },
});

const ServiceBoxSectionTitle = styled.h3({
  fontSize: "1.25em",
  fontWeight: "bold",
  marginBottom: "0.5em",
});

const ServiceBoxSectionCaption = styled.p({
  fontWeight: 200,
  fontSize: "0.875em",
  marginBottom: "2em",
});

const ServiceBoxSectionBadgeWrapper = styled.div({
  gap: "0.5em",
  display: "flex",
  flexWrap: "wrap",
});

const ServiceBoxSectionBadge = styled.span((props) => ({
  flexGrow: "1",
  fontWeight: "200",
  borderRadius: "0.25em",
  padding: "0.25em 0.5em",
  color: `var(--${props.color})`,
  backgroundColor: `rgba(var(--${props.color}-rgb), 0.1)`,
}));

export {
  Wrapper,
  ServiceBox,
  MetaSection,
  ServicesWrapper,
  MetaSectionTitle,
  ServiceBoxSection,
  MetaSectionCaption,
  ServiceBoxSectionTitle,
  ServiceBoxSectionBadge,
  ServiceBoxSectionCaption,
  ServiceBoxSectionBadgeWrapper,
};
