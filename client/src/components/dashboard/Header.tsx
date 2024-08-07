"use client";

import React from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { CiSearch, CiMail } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#ffffff",
  boxShadow: "none",
  borderBottom: "1px solid #e0e0e0",
  height: "58px",
  width: "100%",
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    backgroundColor: "#f9f9f9",
    height: "40px",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

const CustomIconButton = styled(IconButton)({
  "& .MuiIconButton-root": {
    borderRadius: "50px",
    backgroundColor: "#f9f9f9",
  },
});

const Header = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <CustomTextField
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ height: "40px" }}>
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
        <div>
          <CustomIconButton>
            <IoLanguage size={17} />
          </CustomIconButton>

          <CustomIconButton>
            <IoIosNotificationsOutline />
          </CustomIconButton>

          <CustomIconButton>
            <CiMail />
          </CustomIconButton>
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
