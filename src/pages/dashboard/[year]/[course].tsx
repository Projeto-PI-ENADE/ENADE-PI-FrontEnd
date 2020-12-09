import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import yearsData from '../../../utils/data/years';
import formatPtBr from '../../../utils/functions/formatPtBr';
import {
    getData,
    getChartData,
    getGroupedChartData,
    TypeCharts,
    TypeGroupedCharts,
    TypeData,
} from '../../../services';
import { dataApi } from '../../../services/useCases/data';

import Layout from '../../../layout/layout';
import MainCard from '../../../components/mainCard/mainCard';
import { SecondaryCard, CardItem } from '../../../components/secondaryCard';
import CoursesMenu from '../../../components/coursesMenu/coursesMenu';
import YearsMenu from '../../../components/yearsMenu/yearsMenu';
import {
    ChartContainer,
    ChartItem,
    GroupedChartItem,
} from '../../../components/chart';
import ScrollToTopButton from '../../../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../../../styles/pages/yearDashboard';
import useStyles from '../../../styles/pages/curso';

type Props = {
    data: TypeData;
    charts: TypeCharts;
    groupedCharts: TypeGroupedCharts;
};

const Course: React.FC<Props> = (props: Props) => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();
    const { query, isFallback } = useRouter();
    const { data, charts, groupedCharts } = props;

    if (isFallback) {
        return <Typography>Carregando...</Typography>;
    }

    return (
        <Layout>
            <Grid
                container
                direction={'column'}
                className={homeClasses.container}
            >
                <Head>
                    <title>Painel do Enade</title>
                </Head>

                <Grid container>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        component={Typography}
                        variant="h1"
                        className={homeClasses.title}
                    >
                        <Typography>Painel</Typography>{' '}
                        <Typography>do Enade</Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justify="flex-end"
                        spacing={3}
                        className={classes.filtersContainer}
                    >
                        <Grid container item xs={8} md={9} justify="flex-end">
                            <CoursesMenu
                                year={query.year}
                                course={Number(query.course)}
                                coursesData={data.courses!}
                            />
                        </Grid>
                        <Grid container item xs={4} md={3}>
                            <YearsMenu
                                year={Number(query.year)}
                                course={Number(Object.keys(data.courses)[0])}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    component="ul"
                    className={homeClasses.cardsContainer}
                >
                    <MainCard
                        title="Alunos Inscritos"
                        value={formatPtBr(data.studentsEnrolled)}
                    />
                </Grid>

                <ChartContainer
                    title={{ main: 'Resultados', secondary: 'do Enade' }}
                >
                    <ChartItem
                        title="Ranking das notas"
                        description="Alunos"
                        secondaryDescription="Porcentagem"
                        data={charts.scoresRank}
                        chartType={{ first: 'Bar', second: 'Doughnut' }}
                        modalTitle={{
                            main: 'Análises',
                            secondary: 'de notas',
                        }}
                    >
                        <GroupedChartItem
                            title="Notas por Gênero"
                            description="Quantidade"
                            secondaryDescription="Porcentagem"
                            data={groupedCharts.scoresPerGender}
                            switchSize="small"
                            fullWidth
                        />
                        <GroupedChartItem
                            title="Notas por Idade"
                            description="Quantidade"
                            secondaryDescription="Porcentagem"
                            data={groupedCharts.scoresPerAge}
                            switchSize="small"
                            fullWidth
                        />
                        <GroupedChartItem
                            title="Notas por Bolsa"
                            description="Quantidade"
                            secondaryDescription="Porcentagem"
                            data={groupedCharts.scoresPerScholarship}
                            switchSize="small"
                            fullWidth
                        />
                        <GroupedChartItem
                            title="Notas por Etnia"
                            description="Quantidade"
                            secondaryDescription="Porcentagem"
                            data={groupedCharts.scoresPerGroup}
                            switchSize="small"
                            fullWidth
                        />
                        <GroupedChartItem
                            title="Notas por Renda Familiar"
                            description="Quantidade"
                            secondaryDescription="Porcentagem"
                            data={groupedCharts.scoresPerIncome}
                            switchSize="small"
                            fullWidth
                        />
                    </ChartItem>
                </ChartContainer>

                <ChartContainer
                    title={{ main: 'Dados', secondary: 'dos Participantes' }}
                >
                    <ChartItem
                        title="Idade"
                        description="Qnt. total por idade"
                        data={charts.perAgeData}
                    />
                    <ChartItem
                        title="Gênero"
                        description="Qnt. total por gênero"
                        data={charts.perGenderData}
                    />
                    <ChartItem
                        title="Tipo de Ensino Médio %"
                        description="% de tipo de Ensino Médio"
                        data={charts['perSchoolType']}
                        chartType="Doughnut"
                    />
                </ChartContainer>

                <ChartContainer
                    title={{
                        main: 'Dados',
                        secondary: 'dos cursos',
                    }}
                >
                    <ChartItem
                        title="Modalidade de Ensino"
                        description="Qnt. total"
                        data={charts.perTeachingModality}
                        chartType="Doughnut"
                    />
                    <ChartItem
                        title="Organização acadêmica"
                        description="Qnt. total"
                        data={charts.coursesPerAcademicOrg}
                        chartType="Doughnut"
                    />
                </ChartContainer>
                <ScrollToTopButton />
            </Grid>
        </Layout>
    );
};

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];
    for await (const year of [2018 /*2017  , 2016, 2015, 2014 */]) {
        const courses = await dataApi.courses(year);
        Object.keys(courses).map((course) => {
            paths.push({ params: { year: year.toString(), course } });
        });
    }

    // console.log(paths);
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { year, course } = context.params;

    // try {
    const data = await getData(Number(year), false, Number(course));
    const chartsData = await getChartData();
    const groupedCharts = await getGroupedChartData();

    return {
        props: {
            data,
            charts: chartsData,
            groupedCharts,
        },
        // revalidate: 10,
    };
    // } catch (error) {
    // toast de erro
    // console.log(error);
    // return {
    // notFound: true,
    // };
    // }
};
