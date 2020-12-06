import React, { useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ChevronRight, ChevronDown } from '@styled-icons/evaicons-solid';
import coursesData from '../utils/data/courses_w_id_2018.json';
import yearsData from '../utils/data/years';
import { TypeCourses } from '../services/models/data';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../styles/pages/yearDashboard';
import useStyles from '../styles/pages/report';
import { Checkbox } from '@material-ui/core';
import { TreeItem } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { Plus } from '@styled-icons/entypo';


import scoresData from '../utils/data/report/scores';
import presencesData from '../utils/data/report/presences';
import participantsData from '../utils/data/report/participants';
import exportsData from '../utils/data/report/exports';
import yearsReportData from '../utils/data/report/years';
import { dataApi } from '../services/useCases/data';
import ReportCard from '../components/report/reportCard';
import RadioCard from '../components/report/radioCard';
// import CoursesCard from '../components/report/coursesCard/coursesCard';

let ids = 0;

const getNewID = () => {
    const tmp = ids;
    ids++;
    return String(tmp);
}

const FiltrosComponent: React.FC = () => {
    const noID = getNewID()
    const noNot = getNewID()
    const noPre = getNewID()
    const op = ['Por quantidade de alunos', 'Por idade', 'Por sexo', 'Por renda familiar', 'Por modalidade de ensino', 'Por etnia']
    return (
        <TreeItem nodeId={noID} label="Filtro">
            <TreeItem nodeId={noNot} label="Nota">
                <FormGroup row>
                    {op.map(c => (
                        <FormControlLabel
                            id={getNewID()}
                            control={<Checkbox />}
                            label={c}
                        />
                    ))}
                </FormGroup>
            </TreeItem>
            <TreeItem nodeId={noPre} label="Presença">
                <FormGroup row>
                    {op.map(c => (
                        <FormControlLabel
                            id={getNewID()}
                            control={<Checkbox />}
                            label={c}
                        />
                    ))}
                </FormGroup>
            </TreeItem>
        </TreeItem>
    )
}

const CursosComponent: React.FC<Array<number>> = (props: Array<number>) => {
    const cursos = coursesData; //aplicar alguma logica de filtro aqui
    const noID = getNewID()
    console.log(props)
    return (
        <TreeItem nodeId={noID} label="Cursos">
            <FormGroup row>
                {cursos.map(c => (
                    <FormControlLabel
                        id={getNewID()}
                        control={<Checkbox />}
                        label={c.name}
                    />
                ))}
            </FormGroup>
            <FiltrosComponent />
            <Button size="small" variant="contained"
                color="default" endIcon={<Plus />} >
                Adicionar Filtro
            </Button>
        </TreeItem>)
}

const AnosComponent: React.FC = () => {
    const noID = getNewID()
    return (
        <TreeItem nodeId={noID} label="Anos">
            <FormGroup row>
                {yearsData.map(year => (
                    <FormControlLabel
                        id={getNewID()}
                        control={<Checkbox />}
                        label={year}
                    />
                ))}
            </FormGroup>
            <CursosComponent props={[0, 0, 0]} />
            <Button variant="contained" size="small"
                color="default" endIcon={<Plus />} >
                Adicionar Curso
            </Button>
        </TreeItem>)
}

const ArquivoComponent: React.FC = () => {
    const arqList = ['CSV', 'XLSX']
    const noID = getNewID()

    return (
        <TreeItem nodeId={noID} label="Arquivo">
            <FormGroup row>
                {arqList.map(item => (
                    <FormControlLabel
                        id={getNewID()}
                        control={<Checkbox />}
                        label={item}
                    />
                ))}
            </FormGroup>
            <AnosComponent />
            <Button variant="contained" size="small"
                color="default" endIcon={<Plus />} >
                Adicionar Ano
            </Button>
        </TreeItem>)
}

const Report: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();
    const [courses, setCourse] = useState<TypeCourses | null>(null);


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

            <Grid>
                <TreeView
                    defaultCollapseIcon={<ChevronDown />}
                    defaultExpandIcon={<ChevronRight />}>
                    <ArquivoComponent />
                    <Button variant="contained" size="small"
                        color="default" endIcon={<Plus />} >
                        Adicionar Arquivo
                    </Button>
                </TreeView>
            </Grid>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Report;
