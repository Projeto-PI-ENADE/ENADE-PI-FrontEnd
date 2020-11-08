import React, { useState, useEffect } from 'react';
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
    labelKey?: string;
    row?: boolean;
    scroll?: boolean;
};

const ReportCard = <T extends object>(props: Props<T>) => {
    const classes = useStyles();
    const { title, data, labelKey = 'label', row, scroll } = props;

    const [state, setState] = useState(data);
    const [ids, setIds] = useState<Array<number>>([]);

    // useEffect(() => console.log(`${title}: `, ids), [ids]);

    const handleCheckboxes = (
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

    const handleIds = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        let copyIds = [...ids];
        if (event.target.checked) copyIds.push(id);
        else copyIds.splice(copyIds.indexOf(id), 1);
        setIds(copyIds);
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        id: number
    ) => {
        handleCheckboxes(event, index);
        handleIds(event, id);
    };

    return (
        <Grid container className={classes.container}>
            <FormControl component="fieldset">
                <Typography component="legend">{title}</Typography>
                <ClearButton
                    initialData={data}
                    setState={setState}
                    setIds={setIds}
                />
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
                                            handleChange(
                                                event,
                                                index,
                                                item['id']
                                            )
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
