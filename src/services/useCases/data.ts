import api from '../api';
import { TypeStudentsEnrolled } from '../models/data';
import dataUrls from '../urls/data';
import toFixed from '../../utils/functions/toFixed';

const dataApi = {
    studentsEnrolled: async () => {
        try {
            const response = await api.get<TypeStudentsEnrolled>(
                dataUrls.studentsEnrolled
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
};

export type TypeData = {
    studentsEnrolled: number;
};

const getData = async () => {
    const studentsEnrolled = await dataApi.studentsEnrolled();

    const data: TypeData = {
        studentsEnrolled,
    };
    // console.log(data);
    return data;
};

export default getData;
