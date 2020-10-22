import React from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import useStyles from './styles';

interface Props extends GridProps {
    data: string | number;
    subtitle: string;
}

const CardItem: React.FC<Props> = ({ data, subtitle, ...rest }) => {
    // const classes = useStyles();
    return (
        <Grid item xs={6} {...rest}>
            <Typography>{data}</Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
        </Grid>
    );
};

export default CardItem;
