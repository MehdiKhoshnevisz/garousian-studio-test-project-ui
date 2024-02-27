import styled from "styled-components";

const primaryAttrs = {
  color: "#fff",
  backgroundColor: "var(--primary)",
};

const secondaryAttrs = {
  color: "#fff",
  border: "1px solid #fff",
  backgroundColor: "transparent",
};

const ButtonStyled = styled.button((props) => ({
  border: "none",
  cursor: "pointer",
  fontSize: "1.25em",
  padding: "0.5em 2em",
  fontFamily: "inherit",
  borderRadius: "0.25em",
  ...(props.color == "primary" && primaryAttrs),
  ...(props.color == "secondary" && secondaryAttrs),

  "&:active": {
    transition: "all 0.1s ease",
    transform: "scale(0.9)",
  },
}));

export const Button = (props) => {
  const { children, color = "primary" } = props;

  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};
