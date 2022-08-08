import { memo } from "react";

import { getPages } from "api";
import { PageDTO } from "api";
import { Box, Button, Paper, Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useQuerry } from "hooks";

export const LeftSidebar = memo(() => {
  const { isLoading, data, error } = useQuerry<PageDTO[]>(getPages);

  if (isLoading) {
    return <Skeleton variant="rectangular" width={268} height={"100vh"} />;
  }

  if (error) {
    return <span>Error</span>;
  }

  return (
    <Paper
      elevation={12}
      style={{ position: "sticky", top: 65, width: 250, paddingLeft: 16, height: "100vh" }}
    >
      <Box style={{}}>
        {data &&
          data.map(({ route }) => {
            return (
              <NavLink key={route} to={`/pages/edit/${route}`}>
                <Button
                  variant="text"
                  color="primary"
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
        <NavLink key={"add"} to={`/pages/add`}>
          <Button
            variant="text"
            color="secondary"
            style={{ marginTop: `48px` }}
            sx={{
              mb: 1,
              display: "block",
              width: "100%",
              textAlign: "left",
            }}
          >
            Add new
          </Button>
        </NavLink>
      </Box>
    </Paper>
  );
});
