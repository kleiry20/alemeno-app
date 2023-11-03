export type courseModel = {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string; // Can be 'Open', 'Closed', or 'In Progress'
  thumbnail: string; //Link to the course thumbnail
  duration: string;
  schedule: string;
  location: string;
  prerequisites: [string];
  syllabus: [
    {
      week: string;
      topic: string;
      content: string;
    }
    // Additional weeks and topics...
  ];
  students: [
    {
      id: string;
      name: string;
      email: string;
    }
    // Additional enrolled students...
  ];
};
