import styled from "styled-components";

const Footer = styled.footer({
  direction: "ltr",
  color: "#FFFFFF",
  fontWeight: "300",
  padding: "1.25em 0",
  textAlign: "center",
  backgroundColor: "#222",

  "@media(max-width: 768px)": {
    fontSize: "10px",
  },
});

export { Footer };
