import { courseModel } from "./../../utils/courseModel";
import { createSlice } from "@reduxjs/toolkit";

interface CourseState {
  value: [courseModel];
}

const initialState: CourseState = {
  value: [
    {
      id: "",
      name: "",
      instructor: "",
      description: "",
      enrollmentStatus: "",
      thumbnail: "",
      duration: "",
      schedule: "",
      location: "-1",
      prerequisites: [""],
      syllabus: [
        {
          week: "",
          topic: "",
          content: "",
        },
      ],
      students: [
        {
          id: "",
          name: "",
          email: "",
        },
      ],
    },
  ],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = courseSlice.actions;
export default courseSlice.reducer;
