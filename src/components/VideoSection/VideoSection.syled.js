import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";

import BackgroundImage from "/public/images/bg-image.png";

const Wrapper = styled(SectionWrapper)({
  display: "block",
  paddingTop: "6.25rem",
  paddingBottom: "6.25rem",
  backgroundColor: "rgba(102, 102, 102, 1)",

  "@media(max-width: 768px)": {
    paddingTop: "3.75rem",
    paddingBottom: "3.75rem",
  },
});

const Content = styled.div({
  gap: "3.5rem",
  display: "flex",
  alignItems: "center",

  "@media(max-width: 768px)": {
    gap: "2em",
    display: "flex",
    flexDirection: "column-reverse",
  },
});

const VideoBox = styled.div({
  width: "490px",
  height: "260px",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundPosition: "center",
  backgroundBlendMode: "multiply",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundImage: `url(${BackgroundImage.src})`,

  "@media(max-width: 1024px)": {
    flex: "2",
  },

  "@media(max-width: 768px)": {
    flex: "auto",
    width: "312px",
    height: "180px",
  },

  "@media(max-width: 360px)": {
    width: "100%",
  },
});

const VideoMeta = styled.div({
  flex: "1.5",
  color: "white",
  fontWeight: "bold",
});

const VideoMetaTitle = styled.div({
  fontSize: "1.75rem",
  marginBottom: "1em",

  "@media(max-width: 768px)": {
    fontSize: "1.125rem",
  },
});

const VideoMetaList = styled.ul({
  padding: 0,
  listStyle: "none",
});

const VideoMetaListItem = styled.li({
  fontSize: "1rem",
  fontWeight: "200",
  position: "relative",
  paddingBottom: "2em",
  paddingRight: "3rem",
  verticalAlign: "baseline",

  "&:before": {
    right: "0",
    top: "8px",
    content: '""',
    width: "16px",
    height: "16px",
    display: "block",
    background: "white",
    position: "absolute",
    borderRadius: "100%",
  },

  "@media(max-width: 768px)": {
    fontSize: "0.875rem",
    paddingRight: "2rem",

    "&:before": {
      top: "8px",
      width: "12px",
      height: "12px",
    },
  },
});

export {
  Wrapper,
  Content,
  VideoBox,
  VideoMeta,
  VideoMetaTitle,
  VideoMetaList,
  VideoMetaListItem,
};
