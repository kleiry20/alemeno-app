import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const displayData = [
    {
      coursename: "",
      instructorName: "",
      thumbnail: "",
      // dueDate: "",
      // progressBar: "",
    },
  ];

  const courseList = useSelector((state: any) => state.course.value);

  const currentStudent = useSelector(
    (state: any) => state.loggedInStudent.value
  );

  function filterCourses() {
    if (currentStudent !== undefined) {
      currentStudent.enrolledCourses.map((mapCourse: any) => {
        courseList.map((courseItem: any) => {
          if (courseItem.id === parseInt(mapCourse.courseId, 10)) {
            console.log("matchhhhhhhh", courseItem.id, mapCourse.courseId);
            // setDetails((prevState) => {
            //   return {
            //     ...prevState,
            //     coursename: courseItem.name,
            //   };
            // });

            displayData.push({
              ...displayData,
              coursename: courseItem.name,
              instructorName: courseItem.instructor,
              thumbnail: courseItem.thumbnail,
            });
          }
          return 0;
        });
        return 0;
      });
    }
  }
  filterCourses();

  const filteredDisplayData = displayData.filter((item) => {
    return (
      item.coursename !== "" ||
      item.instructorName !== "" ||
      item.thumbnail !== ""
    );
  });

  return (
    <div className="student">
      <Header />
      <div className="student-info">
        <h4 style={{ fontWeight: "bold" }}>Your Info</h4>
        <p>{currentStudent.name}</p>
        <p>{currentStudent.email}</p>
      </div>

      <div className="student-courses">
        {/* list of enrolled courses having: */}
        {/* coursename, instructor name, thumbnail, due date, and a progress bar */}
        {/* mark course as completed */}
        <h4 style={{ fontWeight: "bold" }}>List of Enrolled Courses</h4>
        <div className="student-course-div">
          {filteredDisplayData.map((item) => {
            console.log("filteredDisplayData", filteredDisplayData);
            return (
              <div className="student-course-details">
                <p className="p-style">
                  Course - <span>{item.coursename}</span>
                </p>
                <p className="p-style">
                  Instructor - <span>{item.instructorName}</span>
                </p>
                <p>{item.thumbnail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
