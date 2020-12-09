import api from '../api';
import { TypeStudentsEnrolledPerCourse } from '../models/course';
import courseUrls from '../urls/course';

const courseApi = {
    studentsEnrolled: async () => {
        try {
            const response = await api.get<TypeStudentsEnrolledPerCourse>(
                courseUrls.studentsEnrolledPerCourse
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
};

// export type TypeData = {
//     studentsEnrolled: number;
// };

const getCourseData = async () => {
    const studentsEnrolled = await courseApi.studentsEnrolled();

    const data /*:  TypeData */ = {};
    // console.log(data);
    return data;
};

export default getCourseData;
