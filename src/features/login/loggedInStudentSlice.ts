import { createSlice } from "@reduxjs/toolkit";
import { studentModel } from "../../utils/studentModel";

interface StudentModel {
  value: studentModel;
}

const initialState: StudentModel = {
  value: { id: "", name: "", email: "", enrolledCourses: [""] },
};

const loggedInStudentSlice = createSlice({
  name: "loggedInStudent",
  initialState,
  reducers: {
    loggedInStudent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loggedInStudent } = loggedInStudentSlice.actions;
export default loggedInStudentSlice.reducer;
