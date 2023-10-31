export type courseModel = {
  id: number;
  name: string;
  instructor: string; // Name of the course instructor
  description: string;
  enrollmentStatus: string; // Can be 'Open', 'Closed', or 'In Progress'
  thumbnail: string; //Link to the course thumbnail
  duration: string; // Duration of the course
  schedule: string;
  location: string;
  prerequisites: [string];
  syllabus: [
    {
      week: number;
      topic: string;
      content: string;
    },
    {
      week: number;
      topic: string;
      content: string;
    }
    // Additional weeks and topics...
  ];
  students: [
    {},
    {
      id: number;
      name: string;
      email: string;
    }
    // Additional enrolled students...
  ];
};
