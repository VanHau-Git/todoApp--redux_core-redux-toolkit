import { Checkbox, Row, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodoStatus } from "../../redux/actions";
import todoListSlice from "../TodoList/todosSlice";

const colorPriority = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
function Todo({name, priority, completed, id}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id))
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={colorPriority[priority]} style={{margin: 0}}>{priority}</Tag>
    </Row>
  );
}
export default Todo;
