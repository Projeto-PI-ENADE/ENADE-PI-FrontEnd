import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import { dataApi } from '../../services/useCases/data';
import yearsData from '../../utils/data/years';
import coursesIds from '../coursesMenu/courses_id.json';
import useStyles from './styles';

type Props = {
    year: number;
    course?: number;
};

const yearsMenu: React.FC<Props> = ({ year, course }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedYear, setSelectedYear] = useState(year);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCourseData = async (year: number) => {
        const courses = await dataApi.courses(year);
        console.log(courses);
        Router.push(`/dashboard/${year}/${Object.keys(courses)[0]}`);
    };

    const handleMenuItemClick = async (
        event: React.MouseEvent<HTMLElement>,
        year: number
    ) => {
        setSelectedYear(year);
        if (!course) Router.push(`/dashboard/${year}`);
        else {
            const courseId = coursesIds[year.toString()];
            Router.push(`/dashboard/${year}/${courseId}`);
        }
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
