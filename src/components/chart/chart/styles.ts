import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                marginBottom: '1rem',
            },
        },

        chartContentContainer: {
            padding: '1rem',
            border: '1px solid gray',
            borderRadius: '1rem',
            boxShadow: '2px 3px 6px #00000029',

            [theme.breakpoints.down('md')]: {
                padding: '.3rem',
            },

            '& button': {
                boxShadow: theme.shadows[2],
                color: theme.palette.primary.main,

                '& svg': {
                    [theme.breakpoints.down('md')]: {
                        width: 12,
                        height: 12,
                    },
                },
            },
        },

        titleContainer: {
            '& h6': {
                color: theme.palette.primary.dark,
            },

            [theme.breakpoints.down('md')]: {
                paddingLeft: '1rem',
                textAlign: 'left',

                '& h6': {
                    fontSize: '1rem',
                },
            },
        },
    })
);

export default useStyles;
