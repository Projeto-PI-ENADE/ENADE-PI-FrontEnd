import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

type Props = {
    title: string;
    children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => {
    const classes = useStyles();
    return (
        <Grid container item xs={3} className={classes.card}>
            <Typography variant="h5">{title}</Typography>
            <Box component="span" />
            {children}
        </Grid>
    );
};

export default Card;
