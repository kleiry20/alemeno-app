import { createSlice } from "@reduxjs/toolkit";
import { studentCourseMap } from "../utils/studentCourseMap";

interface StudentCourseMap {
  value: [studentCourseMap];
}

const initialState: StudentCourseMap = {
  value: [{ courseId: "", status: "", studentId: "" }],
};

const studentCourseMapSlice = createSlice({
  name: "studentCourseMap",
  initialState,
  reducers: {
    getMap: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getMap } = studentCourseMapSlice.actions;
export default studentCourseMapSlice.reducer;
