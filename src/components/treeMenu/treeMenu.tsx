import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import yearsData from '../../utils/data/years';
import yearMenuStyles from '../yearsMenu/styles';

type Props = {
    year: number;
    tree: number;
};

const TreeMenu: React.FC<Props> = ({ year: selectedYear, tree }) => {
    const yearMenuClasses = yearMenuStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedTree, setSelectedTree] = useState(tree);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        year: number,
        tree: number
    ) => {
        setSelectedTree(tree);
        Router.push(`/mineracao/${year}/${tree}`);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Button
                aria-controls="menu-de-anos"
                aria-haspopup="true"
                className={yearMenuClasses.button}
                onClick={handleClick}
            >
                Árvore {tree} - {selectedYear}
                <ChevronDownIcon size={20} />
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem disabled>Selecione a árvore:</MenuItem>
                {yearsData.map((year) => (
                    <Box key={year}>
                        <MenuItem disabled>{year}</MenuItem>
                        <MenuItem
                            selected={year === selectedYear && tree === 1}
                            onClick={(event) =>
                                handleMenuItemClick(event, year, 1)
                            }
                        >
                            Árvore 1
                        </MenuItem>
                        <MenuItem
                            selected={year === selectedTree && tree === 2}
                            onClick={(event) =>
                                handleMenuItemClick(event, year, 2)
                            }
                        >
                            Árvore 2
                        </MenuItem>
                    </Box>
                ))}
            </Menu>
        </Fragment>
    );
};

export default TreeMenu;
