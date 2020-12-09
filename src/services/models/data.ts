export type TypeStudentsEnrolled = number;

export type TypeCourses = {
    bacharelado?: {
        [key: string]: string;
    };
    licenciatura?: {
        [key: string]: string;
    };
    tecnologo?: {
        [key: string]: string;
    };
};

export type TypePlaces = {
    UF: number;
    ano: number;
    municipios: number;
    local_ap: number;
    salas: number;
};
