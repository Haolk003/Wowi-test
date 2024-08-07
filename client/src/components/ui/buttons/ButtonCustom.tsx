"use client";

import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>(
  ({
    theme,
    variant,
    size,
    fullWidth,
    backgroundColor,
    textColor,
    hoverBackgroundColor,
    hoverTextColor,
  }) => ({
    ...(variant === "contained" && {
      backgroundColor: backgroundColor || theme.palette.primary.main,
      color: textColor || theme.palette.primary.contrastText,
      width: 160,
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: hoverBackgroundColor || theme.palette.primary.dark,
        color: hoverTextColor || theme.palette.primary.contrastText,
      },
    }),
    ...(variant === "outlined" && {
      borderColor: backgroundColor || theme.palette.primary.main,
      color: textColor || theme.palette.primary.main,
      "&:hover": {
        borderColor: hoverBackgroundColor || theme.palette.primary.dark,
        backgroundColor: hoverBackgroundColor || theme.palette.action.hover,
        color: hoverTextColor || theme.palette.primary.main,
      },
    }),
    ...(variant === "text" && {
      color: textColor || theme.palette.primary.main,
      "&:hover": {
        backgroundColor: hoverBackgroundColor || theme.palette.action.hover,
        color: hoverTextColor || theme.palette.primary.main,
      },
    }),
    ...(size === "small" && {
      padding: theme.spacing(1, 2),
      fontSize: theme.typography.pxToRem(14),
    }),
    ...(size === "large" && {
      padding: theme.spacing(2, 4),
      fontSize: theme.typography.pxToRem(16),
    }),
    ...(fullWidth && {
      width: "100%",
    }),
  })
);

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default CustomButton;
