import Input from "../input/Input";
import { useState } from "react";
const Find = () => {
  const [findText, setFindText] = useState("");
  console.log(findText);

  return (
    <Input
      type="text"
      value={findText}
      placeholder="Find article"
      onChange={setFindText}
    />
  );
};

export default Find;
