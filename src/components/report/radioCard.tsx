import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import useStyles from './styles';

type Props<T> = {
    title: string;
    data: Array<T>;
    labelKey?: string;
};

const ReportCard = <T extends object>(props: Props<T>) => {
    const classes = useStyles();
    const { title, data, labelKey = 'label' } = props;

    const [id, setId] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number((event.target as HTMLInputElement).value));
    };

    return (
        <Grid container className={classes.container}>
            <FormControl component="fieldset">
                <Typography component="legend">{title}</Typography>
                <RadioGroup
                    aria-label={title}
                    value={id}
                    onChange={handleChange}
                >
                    {data.map((item) => (
                        <FormControlLabel
                            key={item['id']}
                            value={item['id']}
                            control={<Radio color="primary" />}
                            label={item[labelKey]}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Grid>
    );
};

export default ReportCard;
