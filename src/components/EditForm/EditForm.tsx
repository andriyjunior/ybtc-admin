import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { PageDTO } from "api";
import { Editor } from "components";
import { handleOnChange, KeyEnum } from "modules";

import { FC, useState } from "react";

interface IEditPageProps {
  page?: Omit<PageDTO, "_id">;
  onSubmit: (data) => void;
}

type InitialStateProps = Omit<PageDTO, "_id">;

const initialState = {
  route: "",
  meta: {
    title: { en: "", ua: "" },
    description: { en: "", ua: "" },
  },
  body: { en: "", ua: "" },
};

export const EditForm: FC<IEditPageProps> = ({ page, onSubmit }) => {
  const [formData, setFormData] = useState<InitialStateProps>(
    page || initialState
  );

  const handleOnStateChange = (data, key?: KeyEnum) => {
    handleOnChange(formData, setFormData, data, key);
  };

  const handleOnSubmit = () => {
    onSubmit(formData);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Page Info
      </Typography>
      <TextField
        label="Page route"
        variant="outlined"
        value={formData?.route}
        onChange={(e) => handleOnStateChange({ route: e.target.value })}
      />
      <Divider sx={{ my: 4 }} variant="middle" />
      <Typography variant="h6" gutterBottom component="div">
        Meta
      </Typography>

      <Box component="div" sx={{ display: "flex" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mr: 2,
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            EN
          </Typography>
          <TextField
            sx={{ my: 1, width: "100%" }}
            label="Title"
            variant="outlined"
            value={formData.meta.title?.en}
            onChange={(e) =>
              handleOnStateChange({ en: e.target.value }, KeyEnum.Title)
            }
          />
          <TextField
            sx={{ my: 1, width: "100%" }}
            label="Description"
            variant="outlined"
            value={formData.meta.description?.en}
            onChange={(e) =>
              handleOnStateChange({ en: e.target.value }, KeyEnum.Description)
            }
          />
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            UA
          </Typography>
          <TextField
            sx={{ my: 1, width: "100%" }}
            label="Title"
            variant="outlined"
            value={formData.meta.title?.ua}
            onChange={(e) =>
              handleOnStateChange({ ua: e.target.value }, KeyEnum.Title)
            }
          />
          <TextField
            sx={{ my: 1, width: "100%" }}
            label="Description"
            variant="outlined"
            value={formData.meta.description?.ua}
            onChange={(e) =>
              handleOnStateChange({ ua: e.target.value }, KeyEnum.Description)
            }
          />
        </Box>
      </Box>

      <Box component="div" sx={{ my: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Body EN
        </Typography>
        <Editor
          value={formData.body?.en}
          onChange={(value) => handleOnStateChange({ en: value }, KeyEnum.Body)}
        />
      </Box>
      <Box component="div" sx={{ my: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Body UA
        </Typography>
        <Editor
          value={formData.body?.ua}
          onChange={(value) => handleOnStateChange({ ua: value }, KeyEnum.Body)}
        />
      </Box>
      <Button variant="contained" onClick={handleOnSubmit}>
        Save
      </Button>
    </>
  );
};
