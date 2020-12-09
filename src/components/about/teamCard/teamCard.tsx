import React, { memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { LinkedinSquare as LinkedinIcon } from '@styled-icons/boxicons-logos';
import { Github as GithubIcon } from '@styled-icons/boxicons-logos';

import DevType from './DevType';
import useStyles from './styles';

type Props = {
    dev: DevType;
    spin: boolean;
};

const TechCard: React.FC<Props> = ({ dev, spin }) => {
    const classes = useStyles();
    const {
        image,
        name,
        jobTitle,
        linkedin,
        linkedinUrl,
        github,
        githubUrl,
    } = dev;

    const [imageIndex, setImageIndex] = useState<0 | 1>(0);

    const handleImageIndex = () => {
        if (image.length !== 1) {
            if (imageIndex === 0) setImageIndex(1);
            else setImageIndex(0);
        } else return;
    };

    return (
        <Grid container alignItems="center" className={classes.container}>
            <Grid item xs={3}>
                <Avatar
                    src={image[imageIndex]}
                    onMouseEnter={handleImageIndex}
                    onMouseOut={handleImageIndex}
                    className={
                        !spin
                            ? classes.avatar
                            : [classes.avatar, classes.spinAnimation].join(' ')
                    }
                />
            </Grid>
            <Grid id="right-side" container item xs={9} justify="space-between">
                <Grid item xs={12} component={Typography} variant="h5">
                    {name}
                </Grid>
                <Grid item xs={12} component={Typography}>
                    {jobTitle}
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    component="a"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubIcon size={30} />
                    <Typography>{github}</Typography>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    component="a"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedinIcon size={30} />
                    <Typography>{linkedin}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(TechCard);
