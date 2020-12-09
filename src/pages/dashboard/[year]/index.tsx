import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
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

import MainCard from '../../../components/mainCard/mainCard';
import { SecondaryCard, CardItem } from '../../../components/secondaryCard';
import YearsMenu from '../../../components/yearsMenu/yearsMenu';
import CoursesCard from '../../../components/coursesCard/coursesCard';
import Layout from '../../../layout/layout';
import {
    ChartContainer,
    ChartItem,
    GroupedChartItem,
} from '../../../components/chart';
import ScrollToTopButton from '../../../components/scrollTopButton/scrollTopButton';
import useStyles from '../../../styles/pages/yearDashboard';

type Props = {
    data: TypeData;
    charts: TypeCharts;
    groupedCharts: TypeGroupedCharts;
};

const Home: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { query } = useRouter();
    const { data, charts, groupedCharts } = props;

    return (
        <Layout>
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

                <Grid
                    container
                    component="ul"
                    className={classes.cardsContainer}
                >
                    <MainCard
                        title="Alunos Inscritos"
                        value={formatPtBr(data.studentsEnrolled)}
                    />
                    <SecondaryCard
                        title="Tipos de Presença"
                        style={{ marginTop: '-4rem' }}
                    >
                        <CardItem
                            data={formatPtBr(charts.perPresence.data[0])}
                            subtitle="Presentes"
                        />
                        <CardItem
                            data={formatPtBr(charts.perPresence.data[1])}
                            subtitle="Ausentes"
                            className="right-content"
                        />
                    </SecondaryCard>
                    {Object.keys(data.places).length !== 0 && (
                        <SecondaryCard title="Aplicação do Exame">
                            <CardItem data={data.places.UF} subtitle="UFs" />
                            <CardItem
                                data={data.places.municipios}
                                subtitle="Municípios"
                                className="right-content"
                            />
                            <CardItem
                                data={data.places.local_ap}
                                subtitle="Locais de Aplicação"
                            />
                            <CardItem
                                data={data.places.salas}
                                subtitle="Salas"
                                className="right-content"
                            />
                        </SecondaryCard>
                    )}
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
                        description="Alunos"
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
                    <ChartItem
                        title="Tipos de Presença"
                        description="Quantidade"
                        secondaryDescription="Porcentagem"
                        data={charts.perPresence}
                        chartType={{ first: 'Bar', second: 'Doughnut' }}
                    />
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

        return {
            props: {
                data,
                charts: chartsData,
                groupedCharts,
            },
            // revalidate: 10,
        };
    } catch (error) {
        // toast de erro
        console.log(error);
        return {
            notFound: true,
        };
    }
};
