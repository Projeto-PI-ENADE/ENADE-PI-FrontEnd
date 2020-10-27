import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Bar } from 'react-chartjs-2';
import { Info as InfoIcon } from '@styled-icons/fa-solid';

import useStyles from './styles';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '% of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const ExampleChart = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={5} className={classes.container}>
            <Grid container>
                <Grid item xs={9} component={Typography} variant="h6">
                    Relatório das notas
                </Grid>
                <Grid container item xs={3} justify="flex-end">
                    <IconButton>
                        <InfoIcon size={16} />
                    </IconButton>
                </Grid>
            </Grid>
            <Bar
                data={data}
                // width={100}
                // height={200}
                // options={{
                //     maintainAspectRatio: false,
                // }}
            />
        </Grid>
    );
};

export default ExampleChart;
