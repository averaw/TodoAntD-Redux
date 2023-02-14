import React, { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { List } from "antd";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      {todos && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(todo) => <Todo todo={todo} key={todo._id} />}
        />
      )}
    </div>
  );
};

export default Todos;
