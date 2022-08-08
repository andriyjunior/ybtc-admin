import {
  Toolbar,
  Typography,
  Button,
  AppBar as AppBarMUI,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, selectUser } from "store";

import { UserBar } from "../UserBar";

interface IAppBarProps {}

export const AppBar: FC<IAppBarProps> = () => {
  const { data } = useAppSelector(selectUser);

  return (
    <AppBarMUI>
      <Toolbar style={{ position: "sticky", top: 0 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Yukon Trades Admin
        </Typography>
        {data ? (
          <UserBar />
        ) : (
          <Link to={"/auth"}>
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBarMUI>
  );
};
