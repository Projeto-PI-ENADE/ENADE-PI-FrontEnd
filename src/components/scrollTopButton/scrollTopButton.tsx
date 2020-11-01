import React, { useEffect, useState, memo } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { ArrowUp as ArrowUpIcon } from '@styled-icons/fa-solid';

import useStyles from './styles';

type Props = {
    size?: 'small' | 'medium' | 'large';
    style?: string;
};

const ScrollTopButton: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { size = 'small', style } = props;

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const checkBottom = () => {
            const windowHeight =
                'innerHeight' in window
                    ? window.innerHeight
                    : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            const windowBottom = windowHeight + window.pageYOffset;
            const fabButtonElement = document.getElementById('goTop-button');
            if (windowBottom >= docHeight) {
                if (fabButtonElement) fabButtonElement.style.bottom = '4rem';
            } else {
                if (fabButtonElement) fabButtonElement.style.bottom = '2rem';
            }
        };

        const checkScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.pageYOffset > 400) {
                    setIsActive(true);
                    checkBottom();
                } else setIsActive(false);
            }
        };
        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    const scrollToTop = () => {
        setIsActive(false);
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={isActive} mountOnEnter unmountOnExit>
            <Box
                id="goTop-button"
                className={
                    style
                        ? [style, classes.fabButtonContainer].join(' ')
                        : classes.fabButtonContainer
                }
            >
                {isActive && (
                    <Tooltip title="Ir para o topo" arrow>
                        <Fab size={size} onClick={scrollToTop}>
                            <ArrowUpIcon size={16} />
                        </Fab>
                    </Tooltip>
                )}
            </Box>
        </Zoom>
    );
};

export default memo(ScrollTopButton);
