import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CourseListing from "./pages/CourseListing/CourseListing";
import CourseDetail from "./pages/CourseDetail";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
