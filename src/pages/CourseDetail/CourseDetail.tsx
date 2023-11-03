import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./CourseDetail.css";

const CourseDetail = () => {
  const navigate = useNavigate();

  // const { id } = useParams();

  const { id } = useParams<{ id: string }>();

  const courseList = useSelector((state: any) => state.course.value);
  // let course: any = {};
  // if (id !== undefined) {
  //   course = courseList.find((element: any) => {
  //     return element.id === parseInt(id);
  //   });
  // }

  // Use the 'id' to fetch and display details for the specific item
  if (id === undefined) {
    return <div>Item not found.</div>;
  }

  const item = courseList.find((item: any) => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found.</div>;
  }

  console.log("item", item);

  const syllabus = item.syllabus;
  const prerequisites = item.prerequisites;
  const students = item.students;

  return (
    <>
      <div className="course-detail">
        <Header />
        <h2 style={{ padding: "1rem 3rem" }}>Course Detail</h2>

        {/* {Object.entries(item).map(([key, value]) => (
          <div key={key}>
            <h2>{key}</h2>

            {key === "prerequisites" ? (
              <ul>
                {(value as string[]).map(
                  (prerequisite: string, index: number) => (
                    <li key={index}>{prerequisite}</li>
                  )
                )}
              </ul>
            ) : key === "syllabus" ? (
              <ul>
                {(value as any[]).map((entry: any, index: number) => (
                  <li key={index}>
                    Week: {entry.week}, Topic: {entry.topic}, Content:{" "}
                    {entry.content}
                  </li>
                ))}
              </ul>
            ) : key === "students" ? (
              <ul>
                {(value as any[]).map((student: any, index: number) => (
                  <li key={index}>
                    Student ID: {student.id}, Name: {student.name}, Email:{" "}
                    {student.email}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{value as string}</p>
            )}
          </div>
        ))} */}
        <div className="course-detail--parent">
          <div className="course-detail--left">
            <h3 style={{ marginBottom: "1.2rem" }}>Course Basic Information</h3>
            <p> Name - {item.name}</p>
            <p> Instructor - {item.instructor}</p>
            <p>Description - {item.description}</p>
            <p>Enrollment Status - {item.enrollmentStatus}</p>
            <p>Thumbnail - {item.thumbnail}</p>
            <p>Duration - {item.duration}</p>
            <p>Schedule - {item.schedule}</p>
            <p>Location - {item.location}</p>
          </div>
          <div className="course-detail--right">
            <div className="course-detail--cards">
              <h3>Syllabus</h3>
              {syllabus.map((syllabusItem: any) => {
                return (
                  <ul>
                    <li>Week: {syllabusItem.week}</li>
                    <li>Topic: {syllabusItem.topic}</li>
                    <li>Content: {syllabusItem.content}</li>
                  </ul>
                );
              })}
            </div>
            <div className="course-detail--cards">
              <h3>Prerequisites</h3>
              {prerequisites.map((prerequisitesItem: any) => {
                return (
                  <ul>
                    <li>{prerequisitesItem}</li>
                  </ul>
                );
              })}
            </div>
            <div className="course-detail--cards">
              <h3>Enrolled Students</h3>
              {students.map((studentsItem: any) => {
                return (
                  <ul>
                    <li>Name: {studentsItem.name}</li>
                    <li>Email: {studentsItem.email}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
