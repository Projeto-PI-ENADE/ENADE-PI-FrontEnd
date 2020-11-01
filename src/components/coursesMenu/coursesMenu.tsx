import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/entypo';

import CoursesDataType from './coursesDataType';
import useStyles from './styles';

type Props = {
    coursesData: Array<CoursesDataType>;
};

const yearsMenu: React.FC<Props> = ({ coursesData }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [courses] = useState(coursesData);

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
                {courses[selectedIndex].name}
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
                {courses.map((course, index) => (
                    <MenuItem
                        key={course.id}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {course.name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default yearsMenu;
