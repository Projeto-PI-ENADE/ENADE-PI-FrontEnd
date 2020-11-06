type ScoreType = {
    label: string;
    checked: boolean;
};

const scores: Array<ScoreType> = [
    {
        label: 'Por quantidade total de alunos',
        checked: false,
    },
    {
        label: 'Por idade',
        checked: false,
    },
    {
        label: 'Por sexo',
        checked: false,
    },
    {
        label: 'Por renda familiar',
        checked: false,
    },
    {
        label: 'Modalidade de Ensino',
        checked: false,
    },
];

export default scores;
