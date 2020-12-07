import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100vw',
            height: '100vh',
            backgroundColor: '#3E8876',
        },

        contentConainer: {
            padding: '2rem',

            '& h1': {
                fontSize: '3rem',
                fontWeight: '400',
                color: '#F5F5F5',
            },

            '& h2': {
                fontSize: '2rem',
                fontWeight: '500',
                color: '#F5F5F5',
            },

            [theme.breakpoints.down('sm')]: {
                '& h1': {
                    margin: theme.spacing(2, 0),
                    fontSize: '2rem',
                },

                '& h2': {
                    margin: theme.spacing(2, 0),
                    fontSize: '1.5rem',
                },
            },
        },

        year: {
            width: 170,
            height: 170,
            backgroundColor: theme.palette.primary.main,
            boxShadow: '2px 3px 6px #00000029',

            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color .2s',

            '& a': {
                color: '#F5F5F5',
                fontSize: '2.2rem',
            },

            '&:hover': {
                backgroundColor: '#158167',
            },

            [theme.breakpoints.only('sm')]: {
                width: 120,
                height: 120,

                '& a': {
                    fontSize: '1.9rem',
                },
            },

            [theme.breakpoints.only('xs')]: {
                width: 85,
                height: 85,

                '& a': {
                    fontSize: '1.6rem',
                },
            },
        },

        illusContainer: {
            alignItems: 'flex-end',
            justifyContent: 'flex-end',

            [theme.breakpoints.only('sm')]: {
                width: '38%',
                marginTop: '2rem',
                alignItems: 'flex-end',
                justifyContent: 'center',
            },
        },
    })
);

export default useStyles;
