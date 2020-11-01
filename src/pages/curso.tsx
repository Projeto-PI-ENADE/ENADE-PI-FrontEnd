import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import coursesData from '../utils/data/courses_w_id_2018.json';

import MainCard from '../components/mainCard/mainCard';
import { SecondaryCard, CardItem } from '../components/secondaryCard';
import CoursesMenu from '../components/coursesMenu/coursesMenu';
import YearsMenu from '../components/yearsMenu/yearsMenu';
import { ChartContainer, ChartItem } from '../components/chart';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../styles/pages/index';
import useStyles from '../styles/pages/curso';

const Course: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();

    return (
        <Grid container direction={'column'} className={homeClasses.container}>
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
                        <CoursesMenu coursesData={coursesData} />
                    </Grid>
                    <Grid container item xs={4} md={3}>
                        <YearsMenu />
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                component="ul"
                className={homeClasses.cardsContainer}
            >
                <MainCard title="Alunos Inscritos" value="500.000" />
                <SecondaryCard title="Tipos de Presença" component="li">
                    <CardItem data="400.000" subtitle="Presentes" />
                    <CardItem
                        data="50.000"
                        subtitle="Ausentes"
                        className="right-content"
                    />
                    <CardItem data="50.000" subtitle="Eliminados" />
                </SecondaryCard>
            </Grid>

            <ChartContainer
                title={{ main: 'Resultados', secondary: 'do Enade' }}
            >
                <ChartItem
                    title="Relatório das notas"
                    modalTitle={{
                        main: 'Análises',
                        secondary: 'de notas',
                    }}
                >
                    <ChartItem title="Relatório das notas" />
                    <ChartItem title="Relatório das notas" />
                    <ChartItem title="Relatório das notas" />
                    <ChartItem title="Relatório das notas" />
                    <ChartItem title="Relatório das notas" />
                    <ChartItem title="Relatório das notas" />
                </ChartItem>
                <ChartItem title="Tipos de Presença" />
            </ChartContainer>

            <ChartContainer
                title={{ main: 'Dados', secondary: 'dos Participantes' }}
            >
                <ChartItem title="Tipos de Presença" />
                <ChartItem title="Tipos de Presença" />
                <ChartItem title="Tipos de Presença" />
                <ChartItem title="Tipos de Presença" />
            </ChartContainer>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Course;
