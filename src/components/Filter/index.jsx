import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { priorityFilterChange, searchFilterChange, statusFilterChange } from "../../redux/actions";
import filtersSlice from "./filtersSlice";
const { Search } = Input;
export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [priorities, setPriorities] = useState([]);
  const handleSearchTextChange = (e) => {
    // search text
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };
  const handlePriorityFilterChange = (value) => {
    setPriorities(value);
    dispatch(filtersSlice.actions.priorityFilterChange(value));
  };
  return (
    <div className="filters">
      <div className="filter-item">
        <Typography.Paragraph className="paragraph" style={{ marginBottom: 3 }}>
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="input search text"
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="filter-item">
        <Typography.Paragraph className="paragraph" style={{ marginBottom: 3 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">Todo</Radio>
        </Radio.Group>
      </div>
      <div className="filter-item">
        <Typography.Paragraph className="paragraph" style={{ marginBottom: 3 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priorities}
          onChange={handlePriorityFilterChange}
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
      </div>
    </div>
  );
}
