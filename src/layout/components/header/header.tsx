import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../../../assets/logo.png';
import useStyles from './styles';

const Header: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const [value, setValue] = useState(0);

    useEffect(() => {
        const setInitialTab = () => {
            console.log(router.pathname);
            switch (router.pathname) {
                case '/':
                    setValue(0);
                    break;
                case '/curso':
                    setValue(1);
                    break;
            }
        };

        setInitialTab();
    }, []);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                router.push('/');
                break;
            case 1:
                router.push(`/curso`);
                break;
        }
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
                <img
                    src={Logo}
                    alt="logo do site com os dizeres ENADE e INEP"
                    draggable="false"
                />
            </Grid>
            <Grid item xs={2} />
            <Grid container item xs={6} justify="flex-end">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="abas de navegação"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
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
