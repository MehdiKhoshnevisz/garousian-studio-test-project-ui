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
  minHeight: "50px",
  minWidth: "220px",
  fontSize: "1.25rem",
  padding: "8px 51px",
  fontFamily: "inherit",
  borderRadius: "0.25em",
  ...(props.color == "primary" && primaryAttrs),
  ...(props.color == "secondary" && secondaryAttrs),

  "&:active": {
    transition: "all 0.1s ease",
    transform: "scale(0.9)",
  },

  "@media(max-width: 768px)": {
    fontSize: "1rem",
    minWidth: "150px",
    minHeight: "43px",
    padding: "8px 28px",
  },

  "@media(max-width: 360px)": {
    padding: "0",
  },
}));

export const Button = (props) => {
  const { children, color = "primary" } = props;

  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};
