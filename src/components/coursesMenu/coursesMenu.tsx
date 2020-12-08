import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import { TypeCourses } from '../../services/models/data';
import yearMenuUseStyles from '../yearsMenu/styles';

type Props = {
    year: string | string[];
    course: number;
    coursesData: TypeCourses | { [key: string]: string };
};

const yearsMenu: React.FC<Props> = ({ year, course, coursesData }) => {
    const yearMenuClasses = yearMenuUseStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedCourse, setSelectedIndex] = useState(course);
    const [courses] = useState(coursesData);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        course_id: number
    ) => {
        setSelectedIndex(course_id);
        Router.push(`/dashboard/${year}/${course_id}`);
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
                {courses[selectedCourse]}
                <ChevronDownIcon size={20} />
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem disabled>Selecione o curso:</MenuItem>
                {Object.entries(courses).map((course) => (
                    <MenuItem
                        key={course[0]}
                        selected={Number(course[0]) === selectedCourse}
                        onClick={(event) =>
                            handleMenuItemClick(event, Number(course[0]))
                        }
                    >
                        {course[1]}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default yearsMenu;
