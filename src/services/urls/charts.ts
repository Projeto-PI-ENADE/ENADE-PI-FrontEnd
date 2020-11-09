const studentUrl = 'alunos';
const courseUrl = 'cursos';

const chartsUrl = {
    studentsPerAge: `${studentUrl}/TotalPorIdade`,
    studentsPerGender: `${studentUrl}/TotalPorSexo`,
    studentsPerSchoolType: `${studentUrl}/PercentualModalidadeEM`,
    coursesPerTeachingModality: `${courseUrl}/ProporcaoPresencialEAD`,
};

export default chartsUrl;
