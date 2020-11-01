import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

type Props = {
    title: string;
    value: string;
};

const MainCard: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { title, value } = props;
    return (
        <Grid component="li" item xs={3} className={classes.mainCard}>
            <Typography variant="h4">{title}</Typography>
            <Typography>{value}</Typography>
        </Grid>
    );
};

export default MainCard;
