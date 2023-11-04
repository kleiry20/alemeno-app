// export type studentModel = {
//   id: string;
//   name: string;
//   email: string;
//   enrolledCourses: [string];
// };

export type studentModel = {
  id: string;
  name: string;
  email: string;
  enrolledCourses: [{ courseId: string }];
};
