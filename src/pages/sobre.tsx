import React, { useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';

import techsData from '../utils/data/techs';
import teamData from '../utils/data/team';

import Layout from '../layout/layout';
import CimatecLogo from '../assets/cimatecLogo.svg';
import TeamIllus from '../assets/illustrations/team.svg';
import TechCard from '../components/about/techCard/techCard';
import TeamCard from '../components/about/teamCard/teamCard';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../styles/pages/yearDashboard';
import useStyles from '../styles/pages/sobre';

const AboutUs: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();

    const [techs] = useState(techsData);
    const [team] = useState(teamData);
    const [spin, setSpin] = useState(false);

    return (
        <Layout>
            <Grid container className={homeClasses.container}>
                <Head>
                    <title>Sobre nós</title>
                </Head>

                <Grid container>
                    <Grid
                        container
                        component={Typography}
                        variant="h1"
                        className={homeClasses.title}
                    >
                        <Typography>Sobre</Typography>{' '}
                        <Typography>Nós</Typography>
                    </Grid>
                </Grid>

                <Grid container className={classes.descriptionContainer}>
                    <Grid container item xs={12} md={6}>
                        <Grid
                            container
                            item
                            xs={12}
                            component={Typography}
                            alignItems="center"
                        >
                            Projeto desenvolvido como requisito para o Projeto
                            Integrador 2 do Curso de Engenharia de Computação do
                            Senai Cimatec, Salvador - BA.
                        </Grid>
                        <Grid id="cimatecLogo-container" item xs={12}>
                            <CimatecLogo />
                        </Grid>
                    </Grid>
                    <Hidden only="xs">
                        <Grid
                            id="teamIllus-container"
                            container
                            item
                            md={6}
                            justify="center"
                        >
                            <TeamIllus />
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid container className={classes.techsWrapper}>
                    <Grid
                        container
                        component={Typography}
                        variant="h2"
                        className={homeClasses.title}
                    >
                        <Typography>Tecnologias</Typography>{' '}
                        <Typography>Utilizadas</Typography>
                    </Grid>

                    <Grid id="techs-container" container spacing={1}>
                        {techs.map((tech, index) => (
                            <Grid key={index} container item xs={3} md>
                                <TechCard tech={tech} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid container className={classes.teamContainer}>
                    <Typography
                        component={ButtonBase}
                        onClick={() => setSpin(!spin)}
                    >
                        Equipe
                    </Typography>
                    <Grid container>
                        {team.map((dev, index) => (
                            <Grid key={index} container item xs={12} md={6}>
                                <TeamCard dev={dev} spin={spin} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <ScrollToTopButton />
            </Grid>
        </Layout>
    );
};

export default AboutUs;
