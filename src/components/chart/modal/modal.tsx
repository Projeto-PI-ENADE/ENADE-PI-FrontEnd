import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import TypeTitle from '../models/title';

import ChartContainer from '../container/container';
import useStyles from './styles';

type Props = {
    title: TypeTitle;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
};

const ChartModal: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { title, isOpen, setIsOpen, children } = props;

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            style={{ paddingTop: '1%' }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <ChartContainer title={title} overflow>
                        {children}
                    </ChartContainer>
                </Paper>
            </Slide>
        </Modal>
    );
};

export default ChartModal;
