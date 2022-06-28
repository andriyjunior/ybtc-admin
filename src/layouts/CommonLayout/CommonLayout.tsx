import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { selectApp, setLanguage, useAppDispatch, useAppSelector } from "store";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./CommonLayout.module.scss";
import { LeftSidebar } from "./parts";

interface ICommonLayoutProps {
  children: ReactNode;
}

export const CommonLayout: FC<ICommonLayoutProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const { notifications } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const handleSetLanguage = (val) => {
    dispatch(setLanguage(val));
  };

  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              onClick={() => setOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              YBTC Admin
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.body}>
        <LeftSidebar isOpen={isOpen} setOpen={setOpen} />

        {children}
      </div>
    </div>
  );
};
