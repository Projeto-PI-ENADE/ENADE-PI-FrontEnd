import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import courses2018 from '../utils/data/courses_2018.json';

import { SecondaryCard, CardItem } from '../components/secondaryCard';
import YearsMenu from '../components/yearsMenu/yearsMenu';
import CoursesCard from '../components/coursesCard/coursesCard';
import { ChartContainer, ChartItem } from '../components/chart';
import useStyles from '../styles/pages/index';

const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction={'column'} className={classes.container}>
            <Head>
                <title>Painel do Enade</title>
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
                <Grid component="li" item xs={3} className={classes.mainCard}>
                    <Typography variant="h4">Alunos Inscritos</Typography>
                    <Typography>500.000</Typography>
                </Grid>
                <SecondaryCard title="Tipos de Presença" component="li">
                    <CardItem data="400.000" subtitle="Presentes" />
                    <CardItem
                        data="50.000"
                        subtitle="Ausentes"
                        className="right-content"
                    />
                    <CardItem data="50.000" subtitle="Eliminados" />
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
                <ChartItem />
                <ChartItem />
            </ChartContainer>

            <ChartContainer
                title={{ main: 'Dados', secondary: 'dos Participantes' }}
            >
                <ChartItem />
                <ChartItem />
            </ChartContainer>
        </Grid>
    );
};

export default Home;
