"use client";
import React from "react";
import { ListItem } from "@mui/material";
import {
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  CustomBadge,
} from "./SideBarStyle";

interface MenuItemProps {
  text: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  badge?: number;
  badgeColor?: "error" | "success" | "primary";
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  selected,
  onClick,
  badge,
  badgeColor,
}) => {
  return (
    <ListItem disablePadding sx={{ fontSize: 13 }}>
      <StyledListItemButton selected={selected} onClick={onClick}>
        <StyledListItemIcon>
          {badge ? (
            <CustomBadge badgeContent={badge} color={badgeColor}>
              {icon}
            </CustomBadge>
          ) : (
            icon
          )}
        </StyledListItemIcon>
        <StyledListItemText primary={text} sx={{ fontSize: "12px" }} />
      </StyledListItemButton>
    </ListItem>
  );
};

export default MenuItem;
