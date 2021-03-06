export type TypeScoresRank = Array<{
    qnt: number;
    prc: number;
}>;
export type TypeScores = Array<{
    grupo: string;
    rank: Array<{
        quantidade_elementos: number;
        percentual: number;
    }>;
}>;
export type TypeStudentsPresence = {
    Total: number;
    NumeroALunosPresentes: number;
    PercentualPresente: number;
    NumeroAlunosAusentes: number;
    PercentualAusente: number;
};

export type TypeStudentsPerAge = Array<number>;
export type TypeStudentsPerGender = {
    feminino: number;
    masculino: number;
};
export type TypeStudentsPerSchoolType = Array<{
    tip_ens_medio: string;
    prc: number;
}>;
export type TypeCoursesPerTeachingModality = {
    presencial: number;
    ead: number;
};
export type TypeCoursesPerAcademicOrg = Array<{
    tipo_org: number | string;
    prc: number;
}>;
