type ScoreType = {
    id: number;
    label: string;
    checked: boolean;
};

const scores: Array<ScoreType> = [
    {
        id: 0,
        label: 'Por quantidade total de alunos',
        checked: false,
    },
    {
        id: 1,
        label: 'Por idade',
        checked: false,
    },
    {
        id: 2,
        label: 'Por sexo',
        checked: false,
    },
    {
        id: 3,
        label: 'Por renda familiar',
        checked: false,
    },
    {
        id: 4,
        label: 'Modalidade de Ensino',
        checked: false,
    },
];

export default scores;
