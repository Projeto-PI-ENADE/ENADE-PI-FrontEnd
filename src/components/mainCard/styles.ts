import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
                color: '#E8FFF9',
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
