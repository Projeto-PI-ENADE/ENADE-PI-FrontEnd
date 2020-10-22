import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import yearsData from './years';
import years from './years';
import useStyles from './styles';

const yearsMenu: React.FC = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number
    ) => {
        setSelectedIndex(index);
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
                className={classes.button}
                onClick={handleClick}
            >
                {years[selectedIndex]}
                <ChevronDownIcon size={20} />
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem disabled>Selecione o ano:</MenuItem>
                {yearsData.map((year, index) => (
                    <MenuItem
                        key={year}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {year}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default yearsMenu;
