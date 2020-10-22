import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { SecondaryCard, CardItem } from '../components/secondaryCard';
import useStyles from '../styles/pages/index';

const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction={'column'} className={classes.container}>
            <Head>
                <title>Painel Enade</title>
            </Head>
            <Grid
                container
                item
                xs={12}
                component={Typography}
                variant="h1"
                className={classes.title}
            >
                <Typography>Painel</Typography>{' '}
                <Typography>do Enade</Typography>
            </Grid>

            <Grid container item className={classes.cardsContainer}>
                <Grid item xs={3} className={classes.mainCard}>
                    <Typography variant="h4">Alunos Inscritos</Typography>
                    <Typography>500.000</Typography>
                </Grid>
                <SecondaryCard title="Tipos de Presença">
                    <CardItem data="400.000" subtitle="Presentes" />
                    <CardItem data="50.000" subtitle="Ausentes" />
                    <CardItem data="50.000" subtitle="Eliminados" />
                </SecondaryCard>
                <SecondaryCard title="Aplicação do Exame">
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
        </Grid>
    );
};

export default Home;
