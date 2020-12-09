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
                zIndex: 5,
            },
        },
    })
);

export default useStyles;
