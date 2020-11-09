import api from '../api';
import {
    TypeScoresRank,
    TypeStudentsPerGender,
    TypeStudentsPerSchoolType,
    TypeCoursesPerTeachingModality,
    TypeCoursesPerAcademicOrg,
} from '../models/charts';
import chartUrls from '../urls/charts';
import toFixed from '../../utils/functions/toFixed';

export type TypeChart = {
    labels: Array<string>;
    data: Array<any>;
    secondaryData?: Array<any>;
};

const chartsApi = {
    scoresRank: async () => {
        try {
            const response = await api.get<TypeScoresRank>(
                chartUrls.scoresRank
            );
            let auxData = [...response.data];
            let dataset: Array<number> = [];
            let dataset2: Array<number> = [];
            auxData.map((item) => {
                dataset.push(item.qnt);
                dataset2.push(toFixed(item.prc, 2));
            });
            // console.log(auxData);
            const data: TypeChart = {
                labels: ['0-20', '20-40', '40-60', '60-80', '80-100'],
                data: dataset,
                secondaryData: dataset2,
            };
            return data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },

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

    coursesPerAcademicOrg: async () => {
        try {
            const response = await api.get<TypeCoursesPerAcademicOrg>(
                chartUrls.coursesPerAcademicOrg
            );
            let auxData = [...response.data];
            let labels: Array<string> = [];
            let dataset: Array<number> = [];
            auxData.map((item) => {
                switch (item.tipo_org) {
                    case 10019:
                        labels.push('Centro Federal de Educação Tecnológica');
                        break;
                    case 10020:
                        labels.push('Centro Universitário');
                        break;
                    case 10022:
                        labels.push('Faculdade');
                        break;
                    case 10026:
                        labels.push(
                            'Instituto Federal de Educação, Ciência e Tecnologia'
                        );
                        break;
                    case 10028:
                        labels.push('Universidade');
                        break;
                }
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
};

const getChartData = async () => {
    const scoresRank = await chartsApi.scoresRank();
    const perAgeData = await chartsApi.studentsPerAge();
    const perGenderData = await chartsApi.studentsPerGender();
    const perSchoolType = await chartsApi.studentsPerSchoolType();
    const perTeachingModality = await chartsApi.coursesPerTeachingModality();
    const coursesPerAcademicOrg = await chartsApi.coursesPerAcademicOrg();

    const data = {
        scoresRank,
        perAgeData,
        perGenderData,
        perSchoolType,
        perTeachingModality,
        coursesPerAcademicOrg,
    };
    // console.log(data);
    return data;
};

export default getChartData;
