import React, { useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ChevronRight, ChevronDown } from '@styled-icons/evaicons-solid';

import scoresData from '../utils/data/report/scores';
import presencesData from '../utils/data/report/presences';
import participantsData from '../utils/data/report/participants';
import exportsData from '../utils/data/report/exports';
import yearsReportData from '../utils/data/report/years';
import coursesData from '../utils/data/courses_w_id_2018.json';
import yearsData from '../utils/data/years';
import { TypeCourses } from '../services/models/data';
import { dataApi } from '../services/useCases/data';

import ReportCard from '../components/report/reportCard';
import RadioCard from '../components/report/radioCard';
// import CoursesCard from '../components/report/coursesCard/coursesCard';
import ScrollToTopButton from '../components/scrollTopButton/scrollTopButton';
import homeUseStyles from '../styles/pages/yearDashboard';
import useStyles from '../styles/pages/report';
import { Checkbox } from '@material-ui/core';
import { TreeItem } from '@material-ui/lab';

const Report: React.FC = () => {
    const homeClasses = homeUseStyles();
    const classes = useStyles();
    let TreeID = 0;

    const [courses, setCourse] = useState<TypeCourses | null>(null);

    const getTreeID = () => {
        const tmp = TreeID;
        TreeID++;
        return String(tmp);
    }

    // const getCoursesData = async() => {
    //     try {
    //         const response = await dataApi.courses();

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const renderYearTree = () => {
    //     return (
    //         <FormGroup row>
    //             { yearsReportData.map(year => (
    //                 <FormControlLabel
    //                     control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
    //                     label={year.year}
    //                 />
    //             ))}
    //         </FormGroup>
    //     )
    // }

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
                    <TreeItem nodeId={getTreeID()} label="Relatorio">
                        <TreeItem nodeId={getTreeID()} label="Arquivo">
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                    label="CSV"
                                />
                                <FormControlLabel
                                    control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                    label="XLS"
                                />
                            </FormGroup>
                            <TreeItem nodeId={getTreeID()} label="Anos">
                                <FormGroup row>
                                    {yearsData.map(year => (
                                        <FormControlLabel
                                            control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                            label={year}
                                        />
                                    ))}

                                </FormGroup>
                                <TreeItem nodeId={getTreeID()} label="Curos">
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Administração"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Direito"
                                    />
                                </TreeItem>
                            </TreeItem>


                            <TreeItem nodeId={getTreeID()} label="Anos">
                                <FormGroup row>
                                    {yearsData.map(year => (
                                        <FormControlLabel
                                            control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                            label={year}
                                        />
                                    ))}

                                </FormGroup>
                                <TreeItem nodeId={getTreeID()} label="Curos">
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Administração"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Direito"
                                    />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem nodeId={getTreeID()} label="Relatorio">
                        <TreeItem nodeId={getTreeID()} label="Arquivo">
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                    label="CSV"
                                />
                                <FormControlLabel
                                    control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                    label="XLS"
                                />
                            </FormGroup>
                            <TreeItem nodeId={getTreeID()} label="Anos">
                                <FormGroup row>
                                    {yearsData.map(year => (
                                        <FormControlLabel
                                            control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                            label={year}
                                        />
                                    ))}

                                </FormGroup>
                                <TreeItem nodeId={getTreeID()} label="Curos">
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Administração"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Direito"
                                    />
                                </TreeItem>
                            </TreeItem>


                            <TreeItem nodeId={getTreeID()} label="Anos">
                                <FormGroup row>
                                    {yearsData.map(year => (
                                        <FormControlLabel
                                            control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                            label={year}
                                        />
                                    ))}

                                </FormGroup>
                                <TreeItem nodeId={getTreeID()} label="Curos">
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Administração"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox /* checked={state.checkedA} onChange={handleChange} name="checkedA" */ />}
                                        label="Direito"
                                    />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>

                </TreeView>
            </Grid>

            <ScrollToTopButton />
        </Grid>
    );
};

export default Report;
