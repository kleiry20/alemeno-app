import { createSlice } from "@reduxjs/toolkit";
import { studentModel } from "../../utils/studentModel";

interface StudentModel {
  value: [studentModel];
}

const initialState: StudentModel = {
  value: [{ id: "", name: "", email: "", enrolledCourses: [{ courseId: "" }] }],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.value = action.payload;
    },
    loggedInStudent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStudent, loggedInStudent } = studentSlice.actions;
export default studentSlice.reducer;
