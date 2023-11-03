import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CourseListing from "./pages/CourseListing/CourseListing";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
