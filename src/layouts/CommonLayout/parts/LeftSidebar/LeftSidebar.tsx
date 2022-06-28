import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";

import PagesIcon from "@mui/icons-material/Pages";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./LeftSidebar.module.scss";

import { getPages } from "api";
import { PageDTO } from "api";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface ILeftSidebarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const LeftSidebar: FC<ILeftSidebarProps> = ({ isOpen, setOpen }) => {
  const [data, setData] = useState<{ pages: PageDTO[]; isLoading: boolean }>({
    pages: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetch = async () => {
      const response = await getPages();

      if (response.status === 200) {
        setData({ pages: response.data.data, isLoading: false });
      }
    };

    fetch();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={12} className={styles.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.pages.map(({ route }) => {
            return (
              <NavLink
                key={route}
                onClick={handleClose}
                to={`pages/edit/${route}`}
              >
                <Button
                  variant="outlined"
                  sx={{
                    mb: 1,
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {route}
                </Button>
              </NavLink>
            );
          })}
          <NavLink key={"add"} to={`pages/add`}>
            <Button
              variant="outlined"
              sx={{ mb: 1, display: "block", width: "100%", textAlign: "left" }}
            >
              Add new
            </Button>
          </NavLink>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
