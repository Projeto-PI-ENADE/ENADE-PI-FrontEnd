import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import BachelorIllus from '../../assets/illustrations/bachelor.svg';
import TechnologyIllus from '../../assets/illustrations/technology.svg';
import useStyles from './styles';

type Props = {
    title: string;
    courses: Array<string>;
    illus: 'bachelor' | 'technology';
};

const CoursesCard: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { title, courses, illus } = props;
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} component={Typography} variant="h5">
                {title}
            </Grid>
            <Grid container item xs={12} md={9}>
                <List>
                    {courses.map((course) => (
                        <ListItem>{course}</ListItem>
                    ))}
                </List>
            </Grid>
            <Hidden mdDown>
                <Grid item xs={3}>
                    {illus === 'bachelor' ? (
                        <BachelorIllus />
                    ) : (
                        <TechnologyIllus />
                    )}
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default CoursesCard;
