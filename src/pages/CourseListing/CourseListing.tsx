import React, { useEffect } from "react";
import { courseModel } from "../../utils/courseModel";
import "./CourseListing.css";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../features/course/courseSlice";

interface DataType {
  courseModel: courseModel;
}

const CourseListing = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const courseList = useSelector((state: any) => state.course.value);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://alemeno-assignment-63310-default-rtdb.firebaseio.com/courses.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(setData(data));
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (courseList === undefined || courseList[0].location === "-1") {
      fetchData();
    }
  }, []);
  // [courseList, dispatch]

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, record: any) => (
        <Link to={`/course-detail/${record.id}`}>{text}</Link>
      ),
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record: any) => (
        <Link to={`/course-detail/${record.id}`}>{text}</Link>
      ),
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      render: (text, record) => <p>{text}</p>,
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => <p>{text}</p>,
      responsive: ["xs", "sm", "md", "lg"],
    },
  ];

  return (
    <div className="course-listing">
      <div className="course-listing--dashboard">
        <h3 className="course-listing--header">Course List</h3>
        <Button type="primary" onClick={() => navigate("/student-dashboard")}>
          Go to Dashboard
        </Button>
      </div>
      <Table
        className="course-listing--table"
        columns={columns}
        dataSource={courseList}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default CourseListing;
