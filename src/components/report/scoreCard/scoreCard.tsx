import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Close as CloseIcon } from '@styled-icons/evaicons-solid';

import ScoreType from './model/ScoreType';
import scoresData from './data/scores';
import useStyles from '../styles';

const ScoreCard: React.FC = () => {
    const classes = useStyles();
    const [scores, setScores] = useState(scoresData);

    // useEffect(() => console.log(scores), [scores]);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        let copyScores = [...scores];
        const objChangeCopy: ScoreType = {
            ...copyScores[index],
            checked: event.target.checked,
        };
        copyScores.splice(index, 1, objChangeCopy);
        setScores(copyScores);
    };

    const clearBoxes = () => {
        setScores(scoresData);
    };

    return (
        <Grid container className={classes.container}>
            <FormControl component="fieldset">
                <Typography component="legend">Notas</Typography>
                <ButtonBase onClick={clearBoxes}>
                    <CloseIcon size={20} />
                    <Typography>Limpar associações</Typography>
                </ButtonBase>
                <FormGroup>
                    {scores.map((score, index) => (
                        <FormControlLabel
                            key={index}
                            label={score.label}
                            control={
                                <Checkbox
                                    name={score.name}
                                    checked={score.checked}
                                    color="primary"
                                    onChange={(event) =>
                                        handleChange(event, index)
                                    }
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Grid>
    );
};

export default ScoreCard;
