import { Divider, Typography } from "antd";
import Filters from "./components/Filter/index.jsx";
import TodoList from "./components/TodoList/index.jsx";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Typography.Title style={{ color: "#7c51a3", textAlign: "center" }}>
        TODO APP with REDUX
      </Typography.Title>
      <Filters />
      <Divider/>
      <TodoList/>
    </div>
  );
}

export default App;
