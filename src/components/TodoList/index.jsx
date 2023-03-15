import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import todosSlice from "./todosSlice";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid"; // import uuid
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";

function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  //useSelector() nhận 1 tham số là 1 selector, selector có thể đc hiểu là 1 function, dùng để lấy ra từng phần dữ liệu trong 1 Store chung
  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      todosSlice.actions.addTodo({
        id: uuidv4(), // npm add uuid vào
        name: todoName,
        completed: false,
        priority: priority,
      })
    ); // dispatch là 1 function bắn đi 1 action
    setTodoName("");
    setPriority("Medium");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleSelectChange = (value) => {
    setPriority(value); //value được lấy trong Select.Option. Cái này được tích hợp sẵn trong thư viện ant design
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          console.log(todo.id)
          return (
            <Todo
              key={todo.id}
              id={todo.id }
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex", marginTop: "30px" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
export default TodoList;
