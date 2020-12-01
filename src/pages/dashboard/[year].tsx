import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import yearsData from '../../utils/data/years';
import formatPtBr from '../../utils/functions/formatPtBr';
import {
    getData,
    getChartData,
    getGroupedChartData,
    getCourseData,
    TypeCharts,
    TypeGroupedChart,
    TypeData,
    TypeCoursesData,
} from '../../services';

import MainCard from '../../components/mainCard/mainCard';
import { SecondaryCard, CardItem } from '../../components/secondaryCard';
import YearsMenu from '../../components/yearsMenu/yearsMenu';
import CoursesCard from '../../components/coursesCard/coursesCard';
import {
    ChartContainer,
    ChartItem,
    GroupedChartItem,
} from '../../components/chart';
import ScrollToTopButton from '../../components/scrollTopButton/scrollTopButton';
import useStyles from '../../styles/pages/index';

type Props = {
    data: TypeData;
    charts: TypeCharts;
    groupedCharts: {
        [key: string]: TypeGroupedChart;
    };
    coursesData: {
        [key: string]: TypeCoursesData;
    };
};

const Home: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { query } = useRouter();
    const { data, charts, groupedCharts } = props;

    return (
        <Grid container direction={'column'} className={classes.container}>
            <Head>
                <title>Painel do Enade</title>
                <meta
                    name="description"
                    content="Análises e relatórios dos dados do ENADE"
                />
            </Head>

            <Grid container>
                <Grid
                    container
                    item
                    xs={6}
                    component={Typography}
                    variant="h1"
                    className={classes.title}
                >
                    <Typography>Painel</Typography>{' '}
                    <Typography>do Enade</Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    justify="flex-end"
                    className={classes.yearsMenuContainer}
                >
                    <YearsMenu year={Number(query.year)} />
                </Grid>
            </Grid>

            <Grid container component="ul" className={classes.cardsContainer}>
                <MainCard
                    title="Alunos Inscritos"
                    value={formatPtBr(data.studentsEnrolled)}
                />
                <SecondaryCard title="Tipos de Presença" component="li">
                    <CardItem data="330.000" subtitle="Presentes" />
                    <CardItem
                        data="57.928"
                        subtitle="Ausentes"
                        className="right-content"
                    />
                    <CardItem data="10.000" subtitle="Eliminados" />
                </SecondaryCard>
                <SecondaryCard title="Aplicação do Exame" component="li">
                    <CardItem data={27} subtitle="UFs" />
                    <CardItem
                        data="1.385"
                        subtitle="Municípios"
                        className="right-content"
                    />
                    <CardItem data="1.581" subtitle="Locais de Aplicação" />
                    <CardItem
                        data="15.055"
                        subtitle="Salas"
                        className="right-content"
                    />
                </SecondaryCard>
            </Grid>

            {data.courses.bacharelado && (
                <CoursesCard
                    title="Lista de cursos de Bacharelado avaliados"
                    courses={data.courses.bacharelado}
                    illus="bachelor"
                />
            )}
            {data.courses.licenciatura && (
                <CoursesCard
                    title="Lista de cursos de Licenciatura avaliados"
                    courses={data.courses.licenciatura}
                    illus="graduation"
                />
            )}
            {data.courses.tecnologo && (
                <CoursesCard
                    title="Lista de cursos de Tecnologia avaliados"
                    courses={data.courses.tecnologo}
                    illus="technology"
                />
            )}

            <ChartContainer
                title={{ main: 'Resultados', secondary: 'do Enade' }}
            >
                <ChartItem
                    title="Ranking das notas"
                    description="Quantidade"
                    secondaryDescription="Porcentagem"
                    data={charts.scoresRank /* ['scoresRank'] */}
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
                        data={groupedCharts['scoresPerGender']}
                        switchSize="small"
                        fullWidth
                    />
                    <GroupedChartItem
                        title="Notas por Idade"
                        description="Quantidade"
                        secondaryDescription="Porcentagem"
                        data={groupedCharts['scoresPerAge']}
                        switchSize="small"
                        fullWidth
                    />
                    <ChartItem title="Relatório das notas" description="Qnt." />
                    <ChartItem title="Relatório das notas" description="Qnt." />
                    <ChartItem title="Relatório das notas" description="Qnt." />
                    <ChartItem title="Relatório das notas" description="Qnt." />
                </ChartItem>
                <ChartItem title="Tipos de Presença" />
            </ChartContainer>

            <ChartContainer
                title={{ main: 'Dados', secondary: 'dos Participantes' }}
            >
                <ChartItem
                    title="Idade"
                    description="Qnt. total por idade"
                    data={charts.perAgeData /* ['perAgeData'] */}
                />
                <ChartItem
                    title="Gênero"
                    description="Qnt. total por gênero"
                    data={charts.perGenderData /* ['perGenderData'] */}
                />
                {/* <ChartItem
                    title="Tipo de Ensino Médio %"
                    description="% de tipo de Ensino Médio"
                    data={charts['perSchoolType']}
                    chartType="Doughnut"
                /> */}
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
                    data={charts['perTeachingModality']}
                    chartType="Doughnut"
                />
                {/* <ChartItem
                    title="Organização acadêmica"
                    description="Qnt. total"
                    data={charts['coursesPerAcademicOrg']}
                    chartType="Doughnut"
                /> */}
            </ChartContainer>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = yearsData.map((year) => {
        return { params: { year: year.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { year } = context.params;

    try {
        const data = await getData(Number(year), true);
        const chartsData = await getChartData();
        const groupedCharts = await getGroupedChartData();
        // const coursesData = await getCourseData();

        return {
            props: {
                data,
                charts: chartsData,
                groupedCharts,
                // coursesData,
            },
            revalidate: 10,
        };
    } catch (error) {
        // toast de erro
        console.log(error);
        return {
            notFound: true,
        };
    }
};
