import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '2rem',
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
        },

        yearsMenuContainer: {
            paddingRight: '2rem',
        },

        cardsContainer: {
            marginTop: '2rem',
        },
        mainCard: {
            marginRight: '2rem',
            padding: '2rem 1.5rem',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '.7rem',
            border: `1px solid #707070`,
            boxShadow: theme.shadows[2],

            '& h4': {
                color: theme.palette.primary.light,
                fontWeight: 600,
            },
            '& p': {
                marginTop: '1rem',
                color: theme.palette.primary.contrastText,
                fontSize: '3rem',
                fontWeight: 'bold',
            },
        },
    })
);

export default useStyles;
