import Image from "next/image";
import styled from "styled-components";

const ServicesSectionImageStyled = styled(Image)({
  width: "100%",
  maxHeight: "250px",
  borderRadius: "8px",

  "@media(max-width: 768px)": {
    maxHeight: "193px",
    marginBottom: "2em",
  },
});

export const ServicesSectionImage = (props) => {
  return <ServicesSectionImageStyled {...props} />;
};
