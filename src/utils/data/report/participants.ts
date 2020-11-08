type TypeParticipants = {
    id: number;
    label: string;
    checked: boolean;
};

const participants: Array<TypeParticipants> = [
    {
        id: 0,
        label: 'Por idade',
        checked: false,
    },
    {
        id: 1,
        label: 'Por sexo',
        checked: false,
    },
    {
        id: 2,
        label: 'Por cor',
        checked: false,
    },
    {
        id: 3,
        label: 'Por modalidade de ensino',
        checked: false,
    },
];

export default participants;
