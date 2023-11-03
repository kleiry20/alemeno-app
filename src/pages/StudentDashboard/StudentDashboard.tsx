import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setStudent } from "../../features/student/studentSlice";
import "./StudentDashboard.css";
import { getMap } from "../../features/studentCourseMapSlice";

const StudentDashboard = () => {
  const dispatch = useDispatch();

  const courseList = useSelector((state: any) => state.course.value);
  const studentList = useSelector((state: any) => state.student.value);
  const enrolledCourses = useSelector(
    (state: any) => state.studentCourseMap.value
  );

  const fetchStudentData = async () => {
    try {
      const response = await fetch(
        "https://alemeno-assignment-63310-default-rtdb.firebaseio.com/students.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(setStudent(data));
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   // if (courseList === undefined || courseList.length === 0) {
  //   //   fetchStudentData();
  //   // }
  //   fetchStudentData();
  //   console.log("studentList", studentList);
  // }, []);

  // to get the enrolled courses by a student
  const fetchEnrolledCourses = async () => {
    try {
      const response = await fetch(
        "https://alemeno-assignment-63310-default-rtdb.firebaseio.com/user-course-map.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(getMap(data));
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrolledCourses();
    fetchStudentData();
  }, []);

  console.log("enrolledCourses", enrolledCourses);

  return (
    <div className="student">
      <Header />
      <div className="student-info">
        <h4 style={{ fontWeight: "bold" }}>Your Info</h4>
        {studentList.map((student: any) => {
          return (
            <>
              <p>{student.name}</p>
              <p>{student.email}</p>
            </>
          );
        })}
      </div>

      <div className="student-courses">
        {/* list of enrolled courses having: */}
        {/* coursename, instructor name, thumbnail, due date, and a progress bar */}
        {/* mark course as completed */}
        <h4 style={{ fontWeight: "bold" }}>List of Enrolled Courses</h4>
      </div>
    </div>
  );
};

export default StudentDashboard;
