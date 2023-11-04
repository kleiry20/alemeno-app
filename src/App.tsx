import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import CourseListing from "./pages/CourseListing/CourseListing";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.loggedInStudent.value
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {isUserLoggedIn.isLoggedIn === true ? (
            <Route path="/" element={<CourseListing />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          {/* <Route path="/" element={<CourseListing />} /> */}
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
