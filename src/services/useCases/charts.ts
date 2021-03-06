import api from '../api';
import {
    TypeScoresRank,
    TypeScores,
    TypeStudentsPresence,
    TypeStudentsPerGender,
    TypeStudentsPerSchoolType,
    TypeCoursesPerTeachingModality,
    TypeCoursesPerAcademicOrg,
} from '../models/charts';
import chartUrls from '../urls/charts';
import toFixed from '../../utils/functions/toFixed';

const colorsConfig = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(254, 96, 13, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(254, 96, 13, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
    ],
    borderWidth: 1,
};

export type TypeChart = {
    labels: Array<string>;
    data: Array<number>;
    secondaryData?: Array<number>;
};

type TypeGroupedChartData = Array<{
    label: string;
    data: Array<number>;
    backgroundColor: string | Array<string>;
    borderColor?: string | Array<string>;
    borderWidth?: number;
}>;

export type TypeGroupedChart = {
    labels: Array<string>;
    data: TypeGroupedChartData;
    secondaryData?: TypeGroupedChartData;
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

    scoresPerGender: async () => {
        const defaultValue = [
            {
                label: 'Feminino',
                data: [],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Masculino',
                data: [],
                backgroundColor: 'rgb(54, 162, 235)',
            },
        ];
        const defaultValue2 = [
            {
                label: 'Feminino',
                data: [],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Masculino',
                data: [],
                backgroundColor: 'rgb(54, 162, 235)',
            },
        ];

        try {
            const response = await api.get<TypeScores>(
                chartUrls.scoresPerGender
            );

            let auxData = [...response.data];
            let dataset: TypeGroupedChartData = [...defaultValue];
            let dataset2: TypeGroupedChartData = [...defaultValue2];

            for (let index = 0; index < auxData.length; index++) {
                auxData[index].rank.map((item) => {
                    dataset[index].data.push(item.quantidade_elementos);
                    if (item.percentual)
                        dataset2[index].data.push(toFixed(item.percentual, 2));
                    else dataset2[index].data.push(0);
                });
            }
            // console.log(dataset);
            // console.log(dataset2);
            const data: TypeGroupedChart = {
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

    scoresPerAge: async () => {
        const dataset: TypeGroupedChartData = [
            {
                label: 'Entre 16 e 24 anos',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Entre 25 e 33 anos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'Entre 34 e 42 anos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'Entre 43 e 51 anos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'Entre 52 e 60 anos',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'Entre 61 e 69 anos',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Entre 70 e 78 anos',
                data: [],
                backgroundColor: '#3DE3B3',
            },
            {
                label: 'Entre 79 e 87 anos',
                data: [],
                backgroundColor: '#22E37E',
            },
        ];
        const dataset2: TypeGroupedChartData = [
            {
                label: 'Entre 16 e 24 anos',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Entre 25 e 33 anos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'Entre 34 e 42 anos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'Entre 43 e 51 anos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'Entre 52 e 60 anos',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'Entre 61 e 69 anos',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Entre 70 e 78 anos',
                data: [],
                backgroundColor: '#3DE3B3',
            },
            {
                label: 'Entre 79 e 87 anos',
                data: [],
                backgroundColor: '#22E37E',
            },
        ];

        try {
            const response = await api.get<TypeScores>(chartUrls.scoresPerAge);
            let auxData = [...response.data];

            for (let index = 0; index < auxData.length; index++) {
                auxData[index].rank.map((item) => {
                    dataset[index].data.push(item.quantidade_elementos);
                    if (item.percentual)
                        dataset2[index].data.push(toFixed(item.percentual, 2));
                    else dataset2[index].data.push(0);
                });
            }
            // console.log(dataset2);
            const data: TypeGroupedChart = {
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

    scoresPerScholarship: async () => {
        const dataset: TypeGroupedChartData = [
            {
                label: 'Curso gratuito',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Curso Privado',
                data: [],
                backgroundColor: '#093b0b',
            },
            {
                label: 'ProUni integral',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'ProUni parcial',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'FIES',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'ProUni e FIES',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Oferecida por governo estadual/distrital/municipal',
                data: [],
                backgroundColor: '#3DE3B3',
            },
            {
                label: 'Oferecida pela própria instituição',
                data: [],
                backgroundColor: '#22E37E',
            },
            {
                label: 'Oferecida por outra entidade',
                data: [],
                backgroundColor: '#3c6108',
            },
            {
                label: 'Financiamento pela instituição',
                data: [],
                backgroundColor: '#08615e',
            },
            {
                label: 'Financiamento bancário',
                data: [],
                backgroundColor: '#093b33',
            },
        ];
        const dataset2: TypeGroupedChartData = [
            {
                label: 'Curso gratuito',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Curso Privado',
                data: [],
                backgroundColor: '#093b0b',
            },
            {
                label: 'ProUni integral',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'ProUni parcial',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'FIES',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'ProUni e FIES',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Oferecida por governo estadual/distrital/municipal',
                data: [],
                backgroundColor: '#3DE3B3',
            },
            {
                label: 'Oferecida pela própria instituição',
                data: [],
                backgroundColor: '#22E37E',
            },
            {
                label: 'Oferecida por outra entidade',
                data: [],
                backgroundColor: '#3c6108',
            },
            {
                label: 'Financiamento pela instituição',
                data: [],
                backgroundColor: '#08615e',
            },
            {
                label: 'Financiamento bancário',
                data: [],
                backgroundColor: '#093b33',
            },
        ];

        try {
            const response = await api.get<TypeScores>(
                chartUrls.scoresPerScholarship
            );
            let auxData = [...response.data];

            for (let index = 0; index < auxData.length; index++) {
                auxData[index].rank.map((item) => {
                    dataset[index].data.push(item.quantidade_elementos);
                    if (item.percentual)
                        dataset2[index].data.push(toFixed(item.percentual, 2));
                    else dataset2[index].data.push(0);
                });
            }
            // console.log(dataset2);
            const data: TypeGroupedChart = {
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

    scoresPerGroup: async () => {
        const dataset: TypeGroupedChartData = [
            {
                label: 'Brancos',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Pretos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'Amarelos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'Pardos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'Indígenas',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'Não declarados',
                data: [],
                backgroundColor: '#74D119',
            },
        ];
        const dataset2: TypeGroupedChartData = [
            {
                label: 'Brancos',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'Pretos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'Amarelos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'Pardos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'Indígenas',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'Não declarados',
                data: [],
                backgroundColor: '#74D119',
            },
        ];

        try {
            const response = await api.get<TypeScores>(
                chartUrls.scoresPerGroup
            );
            let auxData = [...response.data];

            for (let index = 0; index < auxData.length; index++) {
                auxData[index].rank.map((item) => {
                    dataset[index].data.push(item.quantidade_elementos);
                    if (item.percentual)
                        dataset2[index].data.push(toFixed(item.percentual, 2));
                    else dataset2[index].data.push(0);
                });
            }
            // console.log(dataset2);
            const data: TypeGroupedChart = {
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

    scoresPerIncome: async () => {
        const dataset: TypeGroupedChartData = [
            {
                label: 'Até 1,5 salário mínimo',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'De 1,5 a 3 salários mínimos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'De 3 a 4,5 salários mínimos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'De 4,5 a 6 salários mínimos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'De 6 a 10 salários mínimos',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'De 10 a 30 salários mínimos',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Acima 30 salários mínimos',
                data: [],
                backgroundColor: '#3DE3B3',
            },
        ];
        const dataset2: TypeGroupedChartData = [
            {
                label: 'Até 1,5 salário mínimo',
                data: [],
                backgroundColor: '#459AFF',
            },
            {
                label: 'De 1,5 a 3 salários mínimos',
                data: [],
                backgroundColor: '#3DB6E3',
            },
            {
                label: 'De 3 a 4,5 salários mínimos',
                data: [],
                backgroundColor: '#50FAFA',
            },
            {
                label: 'De 4,5 a 6 salários mínimos',
                data: [],
                backgroundColor: '#33D175',
            },
            {
                label: 'De 6 a 10 salários mínimos',
                data: [],
                backgroundColor: '#26FFCC',
            },
            {
                label: 'De 10 a 30 salários mínimos',
                data: [],
                backgroundColor: '#74D119',
            },
            {
                label: 'Acima 30 salários mínimos',
                data: [],
                backgroundColor: '#3DE3B3',
            },
        ];

        try {
            const response = await api.get<TypeScores>(
                chartUrls.scoresPerIncome
            );
            let auxData = [...response.data];

            for (let index = 0; index < auxData.length; index++) {
                auxData[index].rank.map((item) => {
                    dataset[index].data.push(item.quantidade_elementos);
                    if (item.percentual)
                        dataset2[index].data.push(toFixed(item.percentual, 2));
                    else dataset2[index].data.push(0);
                });
            }
            // console.log(dataset2);
            const data: TypeGroupedChart = {
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

    studentsPresence: async () => {
        try {
            const response = await api.get<TypeStudentsPresence>(
                chartUrls.studentsPresence
            );
            const presence = response.data;
            const data: TypeChart = {
                labels: ['Presentes', 'Ausentes'],
                data: [
                    presence.NumeroALunosPresentes,
                    presence.NumeroAlunosAusentes,
                ],
                secondaryData: [
                    toFixed(presence.PercentualPresente, 2),
                    toFixed(presence.PercentualAusente, 2),
                ],
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
                            'Maior parte em escola pública';
                        break;
                    case 'E':
                        auxData[index].tip_ens_medio =
                            'Maior parte em escola particular';
                        break;
                    case 'F':
                        auxData[index].tip_ens_medio =
                            'Parte no Brasil e no exterior';
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

export type TypeCharts = {
    scoresRank: TypeChart;
    perPresence: TypeChart;
    perAgeData: TypeChart;
    perGenderData: TypeChart;
    perSchoolType: TypeChart;
    perTeachingModality: TypeChart;
    coursesPerAcademicOrg: TypeChart;
};

const getChartData = async () => {
    const scoresRank = chartsApi.scoresRank();
    const perPresence = chartsApi.studentsPresence();
    const perAgeData = chartsApi.studentsPerAge();
    const perGenderData = chartsApi.studentsPerGender();
    const perSchoolType = chartsApi.studentsPerSchoolType();
    const perTeachingModality = chartsApi.coursesPerTeachingModality();
    const coursesPerAcademicOrg = chartsApi.coursesPerAcademicOrg();

    // console.time('Charts');
    const response = await Promise.all([
        scoresRank,
        perPresence,
        perAgeData,
        perGenderData,
        perSchoolType,
        perTeachingModality,
        coursesPerAcademicOrg,
    ]);
    // console.timeEnd('Charts');

    const data: TypeCharts = {
        scoresRank: { ...response[0] },
        perPresence: { ...response[1] },
        perAgeData: { ...response[2] },
        perGenderData: { ...response[3] },
        perSchoolType: { ...response[4] },
        perTeachingModality: { ...response[5] },
        coursesPerAcademicOrg: { ...response[6] },
    };
    // console.log(data);
    return data;
};

export type TypeGroupedCharts = {
    scoresPerGender: TypeGroupedChart;
    scoresPerAge: TypeGroupedChart;
    scoresPerScholarship: TypeGroupedChart;
    scoresPerGroup: TypeGroupedChart;
    scoresPerIncome: TypeGroupedChart;
};

export const getGroupedChartData = async () => {
    const scoresPerGender = chartsApi.scoresPerGender();
    const scoresPerAge = chartsApi.scoresPerAge();
    const scoresPerScholarship = chartsApi.scoresPerScholarship();
    const scoresPerGroup = chartsApi.scoresPerGroup();
    const scoresPerIncome = chartsApi.scoresPerIncome();

    // console.time('GroupedCharts');
    const response = await Promise.all([
        scoresPerGender,
        scoresPerAge,
        scoresPerScholarship,
        scoresPerGroup,
        scoresPerIncome,
    ]);
    // console.timeEnd('GroupedCharts');
    const data = {
        scoresPerGender: { ...response[0] },
        scoresPerAge: { ...response[1] },
        scoresPerScholarship: { ...response[2] },
        scoresPerGroup: { ...response[3] },
        scoresPerIncome: { ...response[4] },
    };
    // console.log(data);
    return data;
};

export default getChartData;
