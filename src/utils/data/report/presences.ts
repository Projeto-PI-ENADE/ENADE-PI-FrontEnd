type TypePresence = {
    id: number;
    label: string;
    checked: boolean;
};

const presences: Array<TypePresence> = [
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
];

export default presences;
