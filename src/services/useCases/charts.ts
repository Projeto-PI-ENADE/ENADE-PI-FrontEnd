import api from '../api';
import {
    TypeStudentsPerGender,
    TypeStudentsPerSchoolType,
    TypeCoursesPerTeachingModality,
} from '../models/charts';
import chartUrls from '../urls/charts';
import toFixed from '../../utils/functions/toFixed';

export type TypeChart = {
    labels: Array<string>;
    data: Array<any>;
};

const chartsApi = {
    studentsPerAge: async () => {
        try {
            const response = await api.get<Array<number>>(
                chartUrls.studentsPerAge
            );
            const data: TypeChart = {
                labels: [
                    '16-24',
                    '25-33',
                    '34-42',
                    '43-51',
                    '52-60',
                    '61-69',
                    '70-78',
                    '79-87',
                ],
                data: response.data,
            };
            return data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },

    studentsPerGender: async () => {
        try {
            const response = await api.get<TypeStudentsPerGender>(
                chartUrls.studentsPerGender
            );
            const data: TypeChart = {
                labels: ['Feminino', 'Masculino'],
                data: [response.data.feminino, response.data.masculino],
            };
            return data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },

    studentsPerSchoolType: async () => {
        try {
            const response = await api.get<TypeStudentsPerSchoolType>(
                chartUrls.studentsPerSchoolType
            );
            let auxData = [...response.data];
            let labels: Array<string> = [];
            let dataset: Array<number> = [];
            auxData.map((item, index) => {
                switch (item.tip_ens_medio) {
                    case 'A':
                        auxData[index].tip_ens_medio = 'Todo em Escola pública';
                        break;
                    case 'B':
                        auxData[index].tip_ens_medio =
                            'Todo em Escola Particular';
                        break;
                    case 'C':
                        auxData[index].tip_ens_medio = 'Todo no Exterior';
                        break;
                    case 'D':
                        auxData[index].tip_ens_medio =
                            'A maior parte em escola pública';
                        break;
                    case 'E':
                        auxData[index].tip_ens_medio =
                            'A maior parte em escola particular';
                        break;
                    case 'F':
                        auxData[index].tip_ens_medio =
                            'Parte no Brasil e parte no exterior';
                        break;
                }
                labels.push(item.tip_ens_medio);
                dataset.push(toFixed(item.prc, 2));
            });
            // console.log(auxData);
            const data: TypeChart = {
                labels,
                data: dataset,
            };
            return data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },

    coursesPerTeachingModality: async () => {
        try {
            const response = await api.get<TypeCoursesPerTeachingModality>(
                chartUrls.coursesPerTeachingModality
            );
            const data: TypeChart = {
                labels: ['Presencial', 'EAD'],
                data: [
                    toFixed(response.data.presencial, 2),
                    toFixed(response.data.ead, 2),
                ],
            };
            return data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
};

const getChartData = async () => {
    const perAgeData = await chartsApi.studentsPerAge();
    const perGenderData = await chartsApi.studentsPerGender();
    const perSchoolType = await chartsApi.studentsPerSchoolType();
    const perTeachingModality = await chartsApi.coursesPerTeachingModality();

    const data = {
        perAgeData,
        perGenderData,
        perSchoolType,
        perTeachingModality,
    };
    // console.log(data);
    return data;
};

export default getChartData;
