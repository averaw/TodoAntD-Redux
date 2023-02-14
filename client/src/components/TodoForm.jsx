import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
import { Input, Button } from "antd";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  }; //

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <Input
        type="Input.TextArea"
        placeholder="Enter new todo..."
        onChange={onInputChange}
        value={text}
        bordered={false}
        size="large"
        style={{ width: "600px", marginRight: "55px" }}
      />

      <Button htmlType="submit" onClick={onSubmit} />
    </div>
  );
};

export default TodoForm;
