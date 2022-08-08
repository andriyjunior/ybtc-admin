import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser, tryLogout, useAppDispatch, useAppSelector } from "store";

interface IUserBarProps {}

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const UserBar: FC<IUserBarProps> = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    handleCloseUserMenu();
    dispatch(tryLogout()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    });
  };

  const { data } = useAppSelector(selectUser);

  return (
    data && (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar />
          </IconButton>
        </Tooltip>

        {/* <Typography textAlign="center">{data.name}</Typography> */}
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key={"logout"} onClick={handleLogOut}>
            <Typography textAlign="center">Log out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    )
  );
};
