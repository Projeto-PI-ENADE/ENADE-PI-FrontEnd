import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

type Props = {
    title: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, style, children }) => {
    const classes = useStyles();
    return (
        <Grid container item xs={3} className={classes.card}>
            <Grid item xs={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Box component="span" />
            <Grid container spacing={1} style={style}>
                {children}
            </Grid>
        </Grid>
    );
};

export default Card;
