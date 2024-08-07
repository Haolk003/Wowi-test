"use client";

import styled from "@emotion/styled";
import {
  Drawer,
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const CustomDrawer = styled(Drawer)({
  ".MuiDrawer-paper": {
    backgroundColor: "#ffffff",
    width: 240,
    borderRight: "1px solid #e0e0e0",
    overflow: "hidden",
    "&:hover": {
      overflow: "auto",
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  "& .MuiListItemButton-root": {
    borderRadius: "4px",
    marginBottom: "5px",
    fontSize: "13px",
    "&.Mui-selected": {
      backgroundColor: "#e3f2fd",
      color: "#1976d2",
      "& .MuiListItemIcon-root": {
        color: "#1976d2",
      },
    },
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
  "& .MuiListSubheader-root": {
    fontSize: "15px",
    fontWeight: 400,
    color: "#333",
    lineHeight: "24px",
    marginTop: "10px",
    marginBottom: "5px",
  },
});

export const CustomBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid #fff`,
    padding: "0 4px",
  },
});

export const StyledListItemText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontSize: "14px",
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 500,
  },
});

export const StyledListItemButton = styled(ListItemButton)({
  display: "flex",
  alignItems: "center",
  gap: "0px",
});

export const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "40px",
  fontSize: "16px",
});
