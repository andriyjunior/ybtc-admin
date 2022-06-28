import { KeyEnum } from "./types";

export const handleOnChange = (state, setState, value, objKey?: KeyEnum) => {
  const newForm = JSON.parse(JSON.stringify(state));

  Object.keys(value).forEach((key) => {
    switch (objKey) {
      case KeyEnum.Title:
        newForm.meta.title[key] = value[key];
        break;
      case KeyEnum.Description:
        newForm.meta.description[key] = value[key];
        break;
      case KeyEnum.Body:
        newForm.body[key] = value[key];
        break;
      default:
        newForm[key] = value[key];
    }
  });

  setState(newForm);
};
