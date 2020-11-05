import ScoreType from '../model/ScoreType';

const scores: Array<ScoreType> = [
    {
        name: 'allStudents',
        label: 'Por quantidade total de alunos',
        checked: false,
    },
    {
        name: 'age',
        label: 'Por idade',
        checked: false,
    },
    {
        name: 'gender',
        label: 'Por sexo',
        checked: false,
    },
    {
        name: 'rent',
        label: 'Por renda familiar',
        checked: false,
    },
    {
        name: 'teachingModality',
        label: 'Modalidade de Ensino',
        checked: false,
    },
];

export default scores;
