export interface CourseType {
  id: number;
  title: string;
  address: string;
  description_short: string;
  description_long: string;
  img: string;
  Courses: [{ day: string; time: string }];
}
