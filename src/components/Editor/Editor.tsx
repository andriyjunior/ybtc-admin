import { FC, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import styles from "./Editor.module.scss";

interface IEditorProps {
  value?: string;
  onChange: (value: string) => void;
}

export const Editor: FC<IEditorProps> = ({ value, onChange }) => {
  return <ReactQuill theme="snow" defaultValue={value} onChange={onChange} />;
};
