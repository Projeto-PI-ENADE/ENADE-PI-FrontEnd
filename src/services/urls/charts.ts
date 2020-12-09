const testUrl = 'provas';
const studentUrl = 'alunos';
const courseUrl = 'cursos';
const presenceUrl = 'presenca';

const chartsUrl = {
    scoresRank: `${testUrl}/RankingNotas`,
    scoresPerGender: `${testUrl}/sexo`,
    scoresPerAge: `${testUrl}/idade`,
    scoresPerScholarship: `${testUrl}/bolsa`,
    scoresPerGroup: `${testUrl}/etnia`,
    scoresPerIncome: `${testUrl}/renda`,
    studentsPresence: `${presenceUrl}/proporcaoAusentePresente`,
    studentsPerAge: `${studentUrl}/TotalPorIdade`,
    studentsPerGender: `${studentUrl}/TotalPorSexo`,
    studentsPerSchoolType: `${studentUrl}/PercentualModalidadeEM`,
    coursesPerTeachingModality: `${courseUrl}/ProporcaoPresencialEAD`,
    coursesPerAcademicOrg: `${courseUrl}/PercentualTipoInstituicao`,
};

export default chartsUrl;
