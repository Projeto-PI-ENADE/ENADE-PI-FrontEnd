import React from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import scoresData from '../utils/data/report/scores';
import presencesData from '../utils/data/report/presences';
import participantsData from '../utils/data/report/participants';
import exportsData from '../utils/data/report/exports';
import yearsData from '../utils/data/report/years';
import coursesData from '../utils/data/courses_w_id_2018.json';

import ReportCard from '../components/report/reportCard';
import RadioCard from '../components/report/radioCard';
// import CoursesCard from '../components/report/coursesCard/coursesCard';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../styles/pages/index';
import useStyles from '../styles/pages/report';

const Report: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();
    return (
        <Grid container className={homeClasses.container}>
            <Head>
                <title>Geração de Relatório</title>
            </Head>

            <Grid container>
                <Grid
                    container
                    component={Typography}
                    variant="h1"
                    className={homeClasses.title}
                >
                    <Typography>Geração</Typography>{' '}
                    <Typography>de Relatório</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} className={classes.cardsContainer}>
                <Grid container item xs={12} md={4} spacing={3}>
                    <Grid item xs={12}>
                        <ReportCard title="Notas" data={scoresData} />
                    </Grid>
                    <Grid item xs={12}>
                        <ReportCard title="Presença" data={presencesData} />
                    </Grid>
                    <Grid item xs={12}>
                        <ReportCard
                            title="Dados dos Participantes"
                            data={participantsData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioCard title="Exportação" data={exportsData} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={8} spacing={1}>
                    <Grid item xs={12}>
                        <ReportCard
                            title="Anos"
                            data={yearsData}
                            labelKey="year"
                            row
                        />
                    </Grid>
                    <Grid container item xs={12} style={{ marginTop: '1rem' }}>
                        <ReportCard
                            title="Cursos"
                            data={coursesData}
                            labelKey="name"
                            row
                            scroll
                        />
                    </Grid>
                </Grid>
            </Grid>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Report;
