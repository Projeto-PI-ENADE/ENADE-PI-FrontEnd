import api from '../api';
import { TypeStudentsEnrolled, TypeCourses, TypePlaces } from '../models/data';
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
    places: async () => {
        try {
            const response = await api.get<TypePlaces>(dataUrls.places);
            return response.data;
        } catch (error) {
            console.log(error.response);
            return Promise.reject(error);
        }
    },
};

export { dataApi };

export type TypeData = {
    studentsEnrolled: number;
    courses: TypeCourses | { [key: string]: string };
    places: TypePlaces;
};

const getData = async (year: number, type?: boolean, course?: number) => {
    api.defaults.params = {};
    api.defaults.params['ano'] = year;
    if (course) api.defaults.params['curso'] = course;
    // console.log(api.defaults.params);
    // api.interceptors.request.use((config) => {
    //     config.params = config.params || {};
    //     config.params['ano'] = query.year;
    //     return config;
    // });
    const studentsEnrolled = dataApi.studentsEnrolled(year);
    const courses = dataApi.courses(year, type);
    const places = dataApi.places();

    const response = await Promise.all([studentsEnrolled, courses, places]);

    const data: TypeData = {
        studentsEnrolled: response[0],
        courses: { ...response[1] },
        places: { ...response[2] },
    };
    // console.log(data);
    return data;
};

export default getData;
