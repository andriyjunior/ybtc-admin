import { setNotification } from "store";

export const addNotification = ({
  dispatch,
  status,
  customMsg,
}: {
  dispatch: any;
  status: "success" | "failed";
  customMsg?: string;
}) => {
  const getTitle = (curr: string) => (customMsg ? customMsg : curr);

  const data = {
    success: { title: getTitle("Success"), status: "success" },
    failed: { title: getTitle("Failed"), status: "failed" },
  };

  dispatch(setNotification(data[status]));
};
