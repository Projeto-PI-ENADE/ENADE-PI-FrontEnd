const testUrl = 'provas';
const studentUrl = 'alunos';
const courseUrl = 'cursos';

const chartsUrl = {
    scoresRank: `${testUrl}/RankingNotas`,
    scoresPerGender: `${testUrl}/sexo`,
    scoresPerAge: `${testUrl}/idade`,
    scoresPerGroup: `${testUrl}/etnia`,
    studentsPerAge: `${studentUrl}/TotalPorIdade`,
    studentsPerGender: `${studentUrl}/TotalPorSexo`,
    studentsPerSchoolType: `${studentUrl}/PercentualModalidadeEM`,
    coursesPerTeachingModality: `${courseUrl}/ProporcaoPresencialEAD`,
    coursesPerAcademicOrg: `${courseUrl}/PercentualTipoInstituicao`,
};

export default chartsUrl;
