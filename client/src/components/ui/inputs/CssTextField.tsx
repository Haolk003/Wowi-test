"use client";

import React from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";
import { FieldError, useController, Control } from "react-hook-form";

interface CssTextFieldProps extends Omit<TextFieldProps, "color" | "variant"> {
  name: "email" | "password" | "name";
  control: Control<any>;
  errors?: FieldError;
  label: string;
  className?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#6b7280",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "17px",
    fontWeight: "400",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#959CA9",
      height: "58px",
      borderRadius: "4px",
    },
  },
  "& .MuiInputBase-input": {
    borderColor: "#959CA9",
    fontFamily: "Be Vietnam Pro",
    fontSize: "14px",
    lineHeight: "22px",
  },
  "& label": {
    fontSize: "14px",
    fontFamily: "Be Vietnam Pro",
  },
});

const CssTextField: React.FC<CssTextFieldProps> = ({
  name,
  control,
  errors,
  label,
  className,
  ...rest
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid },
  } = useController({ name, control });
  return (
    <StyledTextField
      {...inputProps}
      {...rest}
      inputRef={ref}
      error={invalid}
      helperText={errors?.message}
      label={label}
      className={className}
      variant="outlined"
      {...rest}
    />
  );
};

export default CssTextField;
