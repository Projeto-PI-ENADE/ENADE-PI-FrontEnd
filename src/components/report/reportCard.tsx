import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ClearButton from './clearButton/clearButton';
import useStyles from './styles';

type Props<T> = {
    title: string;
    data: Array<T>;
    labelKey: string;
    row?: boolean;
    scroll?: boolean;
};

const ReportCard = <T extends object>(props: Props<T>) => {
    const classes = useStyles();
    const { title, data, labelKey, row, scroll } = props;

    const [state, setState] = useState(data);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        let copyState = [...state];
        const objChangeCopy: T = {
            ...copyState[index],
            checked: event.target.checked,
        };
        copyState.splice(index, 1, objChangeCopy);
        setState(copyState);
    };

    return (
        <Grid container className={classes.container}>
            <FormControl component="fieldset">
                <Typography component="legend">{title}</Typography>
                <ClearButton initialData={data} setState={setState} />
                <Grid
                    item
                    xs={12}
                    className={scroll && classes.checkboxesContainer}
                >
                    <FormGroup row={row}>
                        {state.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                label={item[labelKey]}
                                control={
                                    <Checkbox
                                        checked={item['checked']}
                                        color="primary"
                                        onChange={(event) =>
                                            handleChange(event, index)
                                        }
                                    />
                                }
                            />
                        ))}
                    </FormGroup>
                </Grid>
            </FormControl>
        </Grid>
    );
};

export default ReportCard;
