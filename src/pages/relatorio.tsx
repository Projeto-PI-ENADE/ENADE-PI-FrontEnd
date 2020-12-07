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

let ids = 0;

const getNewID = () => {
    const tmp = ids;
    ids++;
    return String(tmp);
}

class Check {
    nome: string
    valor: boolean
}

class Filtro {
    marksNota: Array<Check>
    marksPresenca: Array<Check>

    constructor() {
        const op = ['Por quantidade de alunos', 'Por idade', 'Por sexo', 'Por renda familiar', 'Por modalidade de ensino', 'Por etnia']

        this.marksNota = new Array<Check>(op.length)
        this.marksPresenca = new Array<Check>(op.length)

        for (let index = 0; index < op.length; index++) {
            this.marksNota[index] = { nome: op[index], valor: false }
            this.marksPresenca[index] = { nome: op[index], valor: false }
        }
    }
}

class Curso {
    childs: Array<Filtro>
    marks: Array<Check>

    constructor(ano: number[]) {
        const cursos = coursesData;
        this.childs = new Array<Filtro>()
        this.marks = new Array<Check>(cursos.length)

        for (let i = 0; i < cursos.length; i++) {
            this.marks[i] = { nome: cursos[i].name, valor: cursos[i].checked }

        }
    }
}

class Ano {
    childs: Array<Curso>
    marks: Array<Check>

    constructor() {
        this.childs = new Array<Curso>()
        this.marks = new Array<Check>(yearsData.length)

        for (let i = 0; i < yearsData.length; i++) {
            this.marks[i] = { nome: String(yearsData[i]), valor: false };
        }

    }
}

class Arquivo {
    childs: Array<Ano>
    marks: Array<Check>

    constructor() {
        this.childs = new Array<Ano>()
        this.marks = [{ nome: "CSV", valor: false }, { nome: "XLSX", valor: false }]
    }
}


const Report: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();
    const [courses, setCourse] = useState<TypeCourses | null>(null);
    const [relatorios, setRelatorios] = useState<Array<Arquivo>>([new Arquivo()])

    const adicionarRelatorio = () => {
        const aux = [...relatorios]
        aux.push(new Arquivo());
        setRelatorios(aux)
    }

    const RenderCheckBox: React.FC<Array<Check>> = (props: Array<Check>) => {
        const [upt, setUpt] = useState(0)
        const comp = props.props
        return (
            <FormGroup row>
                {comp.map((item, index) => (
                    <FormControlLabel
                        id={getNewID()}
                        control={<Checkbox checked={item.valor} onChange={(event) => { setUpt(upt + 1); item.valor = event.target.checked }} />}
                        label={item.nome}
                    />
                ))}
            </FormGroup>
        )
    }

    const FiltrosComponent: React.FC<Filtro> = (props: Filtro) => {
        const noID = getNewID()
        const noNot = getNewID()
        const noPre = getNewID()
        const comp = props.props

        return (
            <TreeItem nodeId={noID} label="Filtro">
                <TreeItem nodeId={noNot} label="Nota">
                    <RenderCheckBox props={comp.marksNota} />
                </TreeItem>
                <TreeItem nodeId={noPre} label="Presença">
                    <RenderCheckBox props={comp.marksPresenca} />
                </TreeItem>
            </TreeItem>
        )
    }

    const CursosComponent: React.FC<Curso> = (props: Curso) => {

        const noID = getNewID()
        const comp = props.props
        const [upt, setUpt] = useState(0)

        const adicionarFiltro = (pai: Curso) => {



            pai.childs.push(new Filtro())
            setUpt(upt + 1);
        }

        return (
            <TreeItem nodeId={noID} label="Cursos">
                <RenderCheckBox props={comp.marks} />
                {
                    comp.childs.map(x => (
                        <FiltrosComponent key={getNewID()} props={x} />)
                    )
                }
                <Button size="small" variant="contained"
                    color="default" endIcon={<Plus />} onClick={(event) => { adicionarFiltro(comp) }} >
                    Adicionar Filtro
                </Button>
            </TreeItem >)
    }

    const AnosComponent: React.FC<Ano> = (props: Ano) => {
        const noID = getNewID()
        const comp = props.props
        const [upt, setUpt] = useState(0)

        const adicionarAno = (pai: Ano) => {

            const anos: number[] = []

            pai.marks.map(x => {
                anos.push(Number(x.nome))
            })

            pai.childs.push(new Curso(anos))
            setUpt(upt + 1);
        }

        return (
            <TreeItem nodeId={noID} label="Anos">
                <RenderCheckBox props={comp.marks} />
                {
                    comp.childs.map(x => (
                        <CursosComponent key={getNewID()} props={x} />)
                    )
                }
                <Button variant="contained" size="small"
                    color="default" endIcon={<Plus />} onClick={(event) => { adicionarAno(comp) }} >
                    Adicionar Curso
                </Button>
            </TreeItem>)
    }

    const ArquivoComponent: React.FC<Arquivo> = (props: Arquivo) => {

        const noID = getNewID()
        const comp = props.props
        const [upt, setUpt] = useState(0)


        const adicionarAno = (pai: Arquivo) => {
            pai.childs.push(new Ano())
            setUpt(upt + 1);
        }

        return (
            <TreeItem nodeId={noID} label="Arquivo">
                <RenderCheckBox props={comp.marks} />
                {
                    comp.childs.map(x => (
                        <AnosComponent key={getNewID()} props={x} />)
                    )
                }
                <Button variant="contained" size="small"
                    color="default" endIcon={<Plus />} onClick={(event) => { adicionarAno(comp) }}>
                    Adicionar Ano
                </Button>
            </TreeItem>)
    }

    const RelatorioComponent: React.FC<Array<Arquivo>> = (props: Array<Arquivo>) => {
        const comps = props.props
        return (<div>{
            comps.map(x => (
                <ArquivoComponent key={getNewID()} props={x} />)
            )
        }</div>)
    }


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
                    <RelatorioComponent props={relatorios} />
                    <Button variant="contained" size="small"
                        color="default" endIcon={<Plus />} onClick={adicionarRelatorio} >
                        Adicionar Arquivo
                    </Button>
                </TreeView>
            </Grid>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Report;
