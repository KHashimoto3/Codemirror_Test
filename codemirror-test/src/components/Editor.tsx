import ReactCodeMirror from "@uiw/react-codemirror";
import { SetStateAction, useCallback, useState } from "react";

export const Editor = () => {
  const [value, setValue] = useState<string>("");
  const onChange = useCallback((val: SetStateAction<string>) => {
    setValue(val);
  }, []);
  return (
    <div>
      <h1>Editor</h1>
      <ReactCodeMirror value={value} onChange={onChange} />
      <p>入力内容：{value}</p>
    </div>
  );
};
