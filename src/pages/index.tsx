import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';

import yearsData from '../utils/data/years';
import Footer from '../layout/components/footer/footer';
import StudentsIllus from '../assets/illustrations/students.svg';
import useStyles from '../styles/pages';

const Home: React.FC = () => {
    const classes = useStyles();
    let animationDelay = 50;

    return (
        <Grid container className={classes.container}>
            <Head>
                <title>Painel do Enade</title>
                <meta
                    name="description"
                    content="Análises e relatórios dos dados do ENADE"
                />
            </Head>
            <Grid container className={classes.contentConainer}>
                <Grid
                    container
                    component={Image}
                    src="/inep.png"
                    alt="Logo do Inep"
                    width={144}
                    height={60}
                />
                <Grid
                    container
                    component={Typography}
                    variant="h1"
                    justify="center"
                >
                    Painel do Enade
                </Grid>
                <Grid container justify="center">
                    <Grid
                        container
                        component={Typography}
                        variant="h2"
                        justify="flex-start"
                    >
                        Escolha um ano:
                    </Grid>
                    <Grid container item xs={12} md={9} spacing={3}>
                        {yearsData.map((year) => {
                            animationDelay += 100;
                            return (
                                <Grow
                                    key={year}
                                    in={true}
                                    mountOnEnter
                                    timeout={100 + animationDelay}
                                    style={{
                                        transitionDelay: `${animationDelay}ms`,
                                    }}
                                >
                                    <Grid item xs={6} sm={3} md={2}>
                                        <Link href={`/dashboard/${year}`}>
                                            <Box className={classes.year}>
                                                <Typography component="a">
                                                    {year}
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </Grid>
                                </Grow>
                            );
                        })}
                    </Grid>
                    <Hidden only="xs">
                        <Grid
                            container
                            item
                            xs={12}
                            md={3}
                            className={classes.illusContainer}
                        >
                            <StudentsIllus />
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid container alignItems="flex-end">
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Home;
