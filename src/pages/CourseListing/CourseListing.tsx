import React, { useEffect, useState } from "react";
import { courseModel } from "../../utils/courseUtil";
import "./CourseListing.css";
import { Space, Table, Input, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

interface DataType {
  courseModel: courseModel;
}

const CourseListing = () => {
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<DataType[]>(data);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://alemeno-assignment-63310-default-rtdb.firebaseio.com/courses.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  console.log("data", data);

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <a onClick={() => navigate("/course-detail")}>{text}</a>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="select-btn">Select</button>
        </Space>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filtered = data.filter((record: any) =>
      record.courseModel.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <h3>Course List</h3>
      <Search
        placeholder="Search by Name"
        allowClear
        onSearch={handleSearch}
        enterButton
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Table
        className="course-listing"
        columns={columns}
        dataSource={data}
        // dataSource={filteredData}
      />
    </>
  );
};

export default CourseListing;
