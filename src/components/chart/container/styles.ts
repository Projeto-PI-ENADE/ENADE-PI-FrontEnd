import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            justifyContent: 'flex-start',
            '& #charts-container': {
                [theme.breakpoints.down('md')]: {
                    padding: '0',
                },
            },
        },

        header: {
            margin: '2rem 0',
            display: 'inline-flex',

            '& span': {
                width: 8,
                height: 30,
                borderRadius: 40,
                backgroundColor: theme.palette.primary.main,

                [theme.breakpoints.down('md')]: {
                    marginLeft: 3,
                    width: 7,
                    height: 20,
                },
            },

            '& h5': {
                marginLeft: '1rem',

                '& p:first-child': {
                    fontSize: '1.8rem',
                    fontWeight: 600,
                },

                '& p:last-child': {
                    marginLeft: 10,
                    fontSize: '1.8rem',
                    fontWeight: 500,
                },

                [theme.breakpoints.down('md')]: {
                    '& p:first-child': {
                        fontSize: '1.2rem',
                    },

                    '& p:last-child': {
                        marginLeft: 5,
                        fontSize: '1.2rem',
                    },
                },
            },
        },
    })
);

export default useStyles;
