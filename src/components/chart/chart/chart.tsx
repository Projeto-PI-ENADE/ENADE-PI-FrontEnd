import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Info as InfoIcon } from '@styled-icons/fa-solid';

import TypeTitle from '../models/title';

import ChartModal from '../modal/modal';
import useStyles from './styles';

type Props<T> = {
    title: string;
    description?: string;
    secondaryDescription?: string;
    data?: T;
    secondaryData?: Array<number>;
    modalTitle?: TypeTitle;
    chartType?: 'Bar' | 'Doughnut';
    children?: React.ReactNode;
};

const defaultData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    data: [12, 19, 3, 5, 2, 3],
};

const ChartItem = <T extends object>(props: Props<T>) => {
    const classes = useStyles();
    const {
        title,
        description,
        secondaryDescription,
        data = defaultData,
        modalTitle,
        chartType = 'Bar',
        children,
    } = props;

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [showSecondaryData, setShowSecondaryData] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowSecondaryData(event.target.checked);
    };

    const chartData = {
        labels: data
            ? data['labels']
            : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: showSecondaryData ? secondaryDescription : description,
                data: showSecondaryData ? data['secondaryData'] : data['data'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(254, 96, 13, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(254, 96, 13, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <React.Fragment>
            <Grid container item xs={12} md={6} className={classes.container}>
                <Grid
                    item
                    xs={12}
                    md={11}
                    className={classes.chartContentContainer}
                >
                    <Grid container alignItems="center">
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className={classes.titleContainer}
                        >
                            <Typography variant="h6">{title}</Typography>
                        </Grid>
                        {secondaryDescription && (
                            <Grid
                                container
                                item
                                xs={6}
                                md={4}
                                alignItems="center"
                            >
                                <Switch
                                    color="primary"
                                    checked={showSecondaryData}
                                    onChange={handleChange}
                                    inputProps={{
                                        'aria-label':
                                            'Interruptor do tipo de dado',
                                    }}
                                />
                                <Typography>
                                    {showSecondaryData
                                        ? secondaryDescription
                                        : description}
                                </Typography>
                            </Grid>
                        )}
                        {modalTitle && (
                            <Grid
                                container
                                item
                                xs={6}
                                md={2}
                                justify="flex-end"
                            >
                                <Tooltip
                                    title="Ver detalhes"
                                    arrow
                                    placement="top"
                                >
                                    <IconButton
                                        onClick={() => setModalIsOpen(true)}
                                    >
                                        <InfoIcon size={16} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {chartType === 'Bar' && !showSecondaryData ? (
                            <Bar
                                data={chartData}
                                // width={100}
                                // height={200}
                            />
                        ) : (
                            <Doughnut
                                data={chartData}
                                options={{ maintainAspectRatio: true }}
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
            {modalTitle && (
                <ChartModal
                    title={modalTitle}
                    isOpen={modalIsOpen}
                    setIsOpen={setModalIsOpen}
                >
                    {children}
                </ChartModal>
            )}
        </React.Fragment>
    );
};

export default ChartItem;
