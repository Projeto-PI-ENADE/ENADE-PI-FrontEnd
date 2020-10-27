import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '2rem',

            [theme.breakpoints.down('md')]: {
                padding: '1rem',
            },
        },

        title: {
            flexDirection: 'row',
            alignItems: 'center',

            '& p': {
                fontSize: '2rem',
                fontWeight: 600,
            },

            '& p:last-child': {
                marginLeft: 10,
                fontSize: '2rem',
                fontWeight: 500,
            },

            [theme.breakpoints.down('md')]: {
                '& p': {
                    fontSize: '1.2rem',
                },

                '& p:last-child': {
                    marginLeft: 5,
                    fontSize: '1.2rem',
                },
            },
        },

        yearsMenuContainer: {
            paddingRight: '2rem',

            [theme.breakpoints.down('md')]: {
                paddingRight: '.5rem',
            },
        },

        cardsContainer: {
            marginTop: '2rem',
            flexWrap: 'initial',
            listStyle: 'none',

            [theme.breakpoints.down('md')]: {
                overflowX: 'auto',
                flexWrap: 'nowrap',
            },
        },

        mainCard: {
            marginRight: '2rem',
            padding: '2rem 1.5rem',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '.7rem',
            border: `1px solid #707070`,
            boxShadow: theme.shadows[2],

            [theme.breakpoints.down('md')]: {
                padding: '1rem',
                minWidth: 220,
            },

            '& h4': {
                color: theme.palette.primary.light,
                fontWeight: 600,

                [theme.breakpoints.down('md')]: {
                    fontSize: '1.3rem',
                },
            },
            '& p': {
                marginTop: '1rem',
                color: theme.palette.primary.contrastText,
                fontSize: '3rem',
                fontWeight: 'bold',

                [theme.breakpoints.down('md')]: {
                    fontSize: '2rem',
                },
            },
        },
    })
);

export default useStyles;
