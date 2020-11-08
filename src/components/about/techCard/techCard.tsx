import React, { memo } from 'react';
import Container from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

import TechType from './TechType';
import useStyles from './styles';

type Props = {
    tech: TechType;
};

const TechCard: React.FC<Props> = ({ tech }) => {
    const classes = useStyles();
    const { name, logo, url } = tech;
    return (
        <Tooltip title={name} arrow placement="top">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={classes.container}
            >
                <img src={logo} />
            </a>
        </Tooltip>
    );
};

export default memo(TechCard);
