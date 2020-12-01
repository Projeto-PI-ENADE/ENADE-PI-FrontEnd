import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import yearsData from '../../utils/data/years';
import useStyles from './styles';

type Props = {
    year: number;
};

const yearsMenu: React.FC<Props> = ({ year }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedYear, setSelectedYear] = useState(year);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        year: number
    ) => {
        setSelectedYear(year);
        Router.push(`/dashboard/${year}`);
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
                {year}
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
                {yearsData.map((year) => (
                    <MenuItem
                        key={year}
                        selected={year === selectedYear}
                        onClick={(event) => handleMenuItemClick(event, year)}
                    >
                        {year}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default yearsMenu;
