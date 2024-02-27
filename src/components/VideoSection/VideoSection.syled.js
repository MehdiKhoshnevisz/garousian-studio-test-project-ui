import styled from "styled-components";

import { SectionWrapper } from "@/components/Base/SectionWrapper";

import BackgroundImage from "/public/images/bg-image.png";

const Wrapper = styled(SectionWrapper)({
  display: "block",
  paddingTop: "6.875em",
  paddingBottom: "6.875em",
  backgroundColor: "rgba(102, 102, 102, 1)",

  "@media(max-width: 768px)": {
    paddingTop: "3.75em",
    paddingBottom: "3.75em",
  },
});

const Content = styled.div({
  gap: "7em",
  display: "flex",
  alignItems: "center",

  "@media(max-width: 768px)": {
    gap: "2em",
    display: "flex",
    flexDirection: "column-reverse",
  },
});

const VideoBox = styled.div({
  flex: "1",
  width: "100%",
  height: "260px",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundPosition: "center",
  backgroundBlendMode: "multiply",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundImage: `url(${BackgroundImage.src})`,

  "@media(max-width: 768px)": {
    flex: "auto",
    height: "180px",
  },
});

const VideoMeta = styled.div({
  flex: "1.5",
  color: "white",
  fontWeight: "bold",
});

const VideoMetaTitle = styled.div({
  fontSize: "1.75em",
  marginBottom: "1em",
});

const VideoMetaList = styled.ul({
  padding: 0,
});

const VideoMetaListItem = styled.li({
  fontWeight: "200",
  position: "relative",
  paddingBottom: "2em",
  verticalAlign: "baseline",
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
