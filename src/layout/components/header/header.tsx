import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../../../assets/logo.png';
import useStyles from './styles';

const Header: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    function TabsProps(index: any) {
        return {
            id: `aba-${index}`,
            'aria-controls': `aba-painel-${index}`,
        };
    }

    return (
        <Grid container component="header" className={classes.container}>
            <Grid item xs={4}>
                <img src={Logo} />
            </Grid>
            <Grid item xs={2} />
            <Grid container item xs={6} justify="flex-end">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="abas de navegação"
                    indicatorColor="primary"
                    className={classes.tabs}
                    TabIndicatorProps={{
                        style: { height: 5, borderRadius: '40px 40px 0px 0px' },
                    }}
                >
                    <Tab label="Painel Geral" {...TabsProps(0)} />
                    <Tab label="Cursos" {...TabsProps(1)} />
                    <Tab label="Sobre Nós" {...TabsProps(2)} />
                </Tabs>
            </Grid>
        </Grid>
    );
};

export default Header;
