import api from '../api';
import { TypeStudentsEnrolled, TypeCourses } from '../models/data';
import dataUrls from '../urls/data';

const dataApi = {
    studentsEnrolled: async (year: number) => {
        try {
            const response = await api.get<TypeStudentsEnrolled>(
                dataUrls.studentsEnrolled,
                { params: { ano: year } }
            );
            return response.data;
        } catch (error) {
            console.log('StudentsEnrolled:', error.response);
            return Promise.reject(error);
        }
    },
    courses: async (year: number, type?: boolean) => {
        try {
            const response = await api.get<TypeCourses>(dataUrls.courses, {
                params: !type ? { ano: year } : { ano: year, tipo: type },
            });
            return response.data;
        } catch (error) {
            console.log(error.response);
            return Promise.reject(error);
        }
    },
};

export type TypeData = {
    studentsEnrolled: number;
    courses: TypeCourses;
};

const getData = async (year: number, type?: boolean) => {
    api.defaults.params = {};
    api.defaults.params['ano'] = year;
    // api.interceptors.request.use((config) => {
    //     config.params = config.params || {};
    //     config.params['ano'] = query.year;
    //     return config;
    // });
    const studentsEnrolled = await dataApi.studentsEnrolled(year);
    const courses = await dataApi.courses(year, type);

    const data: TypeData = {
        studentsEnrolled,
        courses,
    };
    // console.log(data);
    return data;
};

export default getData;
