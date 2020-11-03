import React, { memo } from 'react';
import Container from '@material-ui/core/Box';
import useStyles from './styles';

type Props = {
    logo: string;
};

const TechCard: React.FC<Props> = ({ logo }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <img src={logo} />
        </Container>
    );
};

export default memo(TechCard);
