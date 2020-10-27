import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

type Props = {
    title: { main: string; secondary: string };
    children: React.ReactNode;
};

const Header: React.FC<Props> = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid container alignItems="center" className={classes.header}>
                <Box component="span" />
                <Grid container item xs component={Typography} variant="h5">
                    <Typography>{title.main}</Typography>
                    <Typography>{title.secondary}</Typography>
                </Grid>
            </Grid>
            <Grid
                id="charts-container"
                container
                justify="space-evenly"
                spacing={3}
            >
                {children}
            </Grid>
        </Grid>
    );
};

export default Header;
