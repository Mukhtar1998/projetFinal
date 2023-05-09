export interface yogaCoursesType {
    id: number;
    title: string;
    description: string;
    maxStudent: number;
    cost: number;
    courses: {
            day: string;
            time: string;
        }
}