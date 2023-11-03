import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/course/courseSlice";
import studentReducer from "../features/student/studentSlice";
import studentCourseMapReducer from "../features/studentCourseMapSlice";
import loggedInStudentReducer from "../features/login/loggedInStudentSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    student: studentReducer,
    studentCourseMap: studentCourseMapReducer,
    loggedInStudent: loggedInStudentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
