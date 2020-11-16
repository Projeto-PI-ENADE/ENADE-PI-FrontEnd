import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import courses2018 from '../utils/data/courses_2018.json';
import formatPtBr from '../utils/functions/formatPtBr';
import {
    getData,
    getChartData,
    getGroupedChartData,
    TypeChart,
    TypeGroupedChart,
    TypeData,
} from '../services';

import MainCard from '../components/mainCard/mainCard';
import { SecondaryCard, CardItem } from '../components/secondaryCard';
import YearsMenu from '../components/yearsMenu/yearsMenu';
import CoursesCard from '../components/coursesCard/coursesCard';
import {
    ChartContainer,
    ChartItem,
    GroupedChartItem,
} from '../components/chart';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import useStyles from '../styles/pages/index';

type Props = {
    data: TypeData;
    charts: {
        [key: string]: TypeChart;
    };
    groupedCharts: {
        [key: string]: TypeGroupedChart;
    };
};

const Home: React.FC<Props> = ({ data, charts, groupedCharts }) => {
    const classes = useStyles();

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
                    <YearsMenu />
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

            <CoursesCard
                title="Lista de cursos de Bacharelado avaliados"
                courses={courses2018.bacharelado}
                illus="bachelor"
            />

            <CoursesCard
                title="Lista de cursos de Tecnologia avaliados"
                courses={courses2018.tecnologia}
                illus="technology"
            />

            <ChartContainer
                title={{ main: 'Resultados', secondary: 'do Enade' }}
            >
                <ChartItem
                    title="Ranking das notas"
                    description="Quantidade"
                    secondaryDescription="Porcentagem"
                    data={charts['scoresRank']}
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
                    />
                    <ChartItem title="Relatório das notas" description="Qnt." />
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
                    data={charts['perAgeData']}
                />
                <ChartItem
                    title="Gênero"
                    description="Qnt. total por gênero"
                    data={charts['perGenderData']}
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
                    data={charts['perTeachingModality']}
                    chartType="Doughnut"
                />
                <ChartItem
                    title="Organização acadêmica"
                    description="Qnt. total"
                    data={charts['coursesPerAcademicOrg']}
                    chartType="Doughnut"
                />
            </ChartContainer>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    try {
        const data = await getData();
        const chartsData = await getChartData();
        const groupedChart = await getGroupedChartData();

        return {
            props: {
                data,
                charts: chartsData,
                groupedCharts: groupedChart,
            },
            revalidate: 10,
        };
    } catch (error) {
        // toast de erro
    }
};
