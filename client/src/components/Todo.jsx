import React, { useState } from "react";
import PropTypes from "prop-types";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Checkbox, Input, Form, Button, Tooltip } from "antd";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(toggleTodo(todo._id));
  };
  const onFormSubmit = () => {
    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };

  return (
    <div
      className="task"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Checkbox onChange={onChange} />

        <span style={{ display: editing ? "none" : "", marginLeft: "20px" }}>
          {todo.data}
        </span>
        <Form
          style={{ display: editing ? "inline" : "none" }}
          onFinish={onFormSubmit}
        >
          <Input
            type="Input.TextArea"
            bordered={false}
            value={text}
            className="edit-todo"
            onChange={(e) => setText(e.target.value)}
          />
        </Form>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Tooltip title="search">
          <Button
            onClick={() => dispatch(deleteTodo(todo._id))}
            icon={<DeleteFilled />}
            type="primary"
            style={{ backgraund: "transparent" }}
          />
        </Tooltip>
        <Tooltip title="search">
          <Button
            onClick={() => setEditing((prevState) => !prevState)}
            icon={<EditFilled />}
            type="primary"
          />
        </Tooltip>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object
};

export default Todo;
