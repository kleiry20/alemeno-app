import { createSlice } from "@reduxjs/toolkit";
import { studentModel } from "../../utils/studentModel";
import { loginModel } from "./loginModel";

interface StudentModel {
  value: loginModel;
}

const initialState: StudentModel = {
  // value: { id: "", name: "", email: "", enrolledCourses: [""] },
  value: { email: "", isLoggedIn: false },
};

const loggedInStudentSlice = createSlice({
  name: "loggedInStudent",
  initialState,
  reducers: {
    loggedInStudent: (state, action) => {
      // state.value = action.payload;
      state.value = {
        ...state.value,
        ...action.payload,
        isLoggedIn: true,
      };
    },
  },
});

export const { loggedInStudent } = loggedInStudentSlice.actions;
export default loggedInStudentSlice.reducer;
