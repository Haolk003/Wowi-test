"use client";

import React from "react";
import Image from "next/image";
import {
  Grid,
  Button,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { CiLogout } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useAppSelector, useAppDispatch } from "@/store/hook";

import { userLoggout } from "@/services/auth/authSlice";

const AvatarSection = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(userLoggout());
  };
  return (
    <ListItem className="h-[50px] border-b border-[#e0e0e0] w-full">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e: any) => handleClick(e)}
        className="w-full"
      >
        <Grid
          container
          spacing={2}
          className="w-full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={3}>
            <Image
              width={30}
              height={30}
              className="object-cover rounded-full"
              src="/assets/Avatar.jpg"
              alt=""
            />
          </Grid>

          <Grid item xs={6}>
            <ListItemText>
              <p className="capitalize text-sidebar-bg-dark text-16 font-BeVietNam font-400 whitespace-wrap overflow-ellipsis overflow-hidden line-clamp-1">
                {user?.name}
              </p>
            </ListItemText>
          </Grid>

          <Grid item xs={3}>
            <div className="flex items-center justify-center h-full">
              <FaAngleDown />
            </div>
          </Grid>
        </Grid>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Grid container spacing={2} gap={1}>
            <Grid item>
              <Image
                width={30}
                height={30}
                className="object-cover rounded-full"
                src="/assets/Avatar.jpg"
                alt=""
              />
            </Grid>

            <Grid item>
              <p className="text-16 text-text-primary font-Poppins font-semibold capitalize">
                {user?.name}
              </p>
              <p className="text-12 font-semibold font-Poppins text-text-secondary">
                {user?.email}
              </p>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} className="flex items-center gap-3">
          <CiLogout /> Logout
        </MenuItem>
      </Menu>
    </ListItem>
  );
};

export default AvatarSection;
